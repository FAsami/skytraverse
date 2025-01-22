import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'
import { duffelClient } from '@/app/lib/duffelClient'
import { CreateOrder } from '@duffel/api/types'
import {
  GetFlightBookingsQuery,
  GetFlightBookingsQueryVariables,
  UpdateFlightBookingMutation,
  UpdateFlightBookingMutationVariables
} from '@/types/gql/graphql'
import { gqlAdminClient } from '@/app/lib'
import { UPDATE_FLIGHT_BOOKING } from '@/app/graphql/mutation'
import { GET_FLIGHT_BOOKINGS } from '@/app/graphql/query'
import { createFlightBookingLog } from '@/app/api/payments/webhooks/stripe/utils/createFlightBookingLog'

const confirmBookedFlight = async (id: string): Promise<ActionResponse> => {
  try {
    const params: GetFlightBookingsQueryVariables = {
      where: {
        id: {
          _eq: Number(id)
        }
      }
    }
    const flights = await gqlAdminClient.request<GetFlightBookingsQuery>(
      GET_FLIGHT_BOOKINGS,
      params
    )
    const bookedFlight = flights.booking_flights[0]
    if (bookedFlight.status === 'SUCCEEDED') {
      return { success: true, message: 'This flight has been already booked' }
    }
    if (bookedFlight.provider === 'DUFFEL') {
      try {
        if (bookedFlight.providerOfferId) {
          const offerRequest = await duffelClient.offers.get(
            bookedFlight.providerOfferId
          )
          const offer: CreateOrder = {
            selected_offers: [offerRequest.data.id],
            passengers: bookedFlight.providerOfferDetails?.passengers,
            type: 'instant',
            metadata: {
              bookingId: id
            },
            payments: [
              {
                type: 'balance',
                amount: offerRequest.data.total_amount,
                currency: offerRequest.data.total_currency
              }
            ]
          }
          const data = await duffelClient.orders.create(offer)

          await createFlightBookingLog({
            bookingId: Number(id),
            details: data,
            status: data.data.id ? 'SUCCEEDED' : 'PENDING'
          })
          if (data.data.id) {
            const bookingParams: UpdateFlightBookingMutationVariables = {
              where: { id: { _eq: Number(id) } },
              _set: { status: 'SUCCEEDED', providerOrderDetails: data.data }
            }
            await gqlAdminClient.request<UpdateFlightBookingMutation>(
              UPDATE_FLIGHT_BOOKING,
              bookingParams
            )
            return {
              success: true,
              message: 'Flight booked successfully.'
            }
          }
        }
      } catch (error) {
        console.log('Duffel booking error', error)
      }
    }

    return {
      success: false,
      message: 'Something went wrong'
    }
  } catch (error) {
    if (error instanceof DuffelError) {
      return {
        error: error,
        success: false,
        message: error.message
      }
    }
    return {
      error: error,
      success: false,
      message: 'Failed to create offer request'
    }
  }
}

export { confirmBookedFlight }
