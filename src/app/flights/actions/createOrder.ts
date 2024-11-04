'use server'
import { CreateOrderPassenger, Offer } from '@duffel/api/types'
import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'
import { gqlAdminClient } from '@/app/lib'
import { CREATE_FLIGHT_BOOKING } from '@/app/graphql/mutation'
import {
  CreateFlightBookingMutation,
  CreateFlightBookingMutationVariables,
  GetFlightBookingsQuery,
  GetFlightBookingsQueryVariables
} from '@/types/gql/graphql'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { GET_FLIGHT_BOOKINGS } from '@/app/graphql/query'

const createOrder = async (
  offer: Offer,
  passengers: CreateOrderPassenger[],
  paymentMethodId: string
): Promise<ActionResponse | void> => {
  let orderId
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: 'Unauthorize access'
      }
    }
    if (!offer.id) {
      return {
        success: false,
        message: 'Offer id not found'
      }
    }
    if (offer.id) {
      const params: GetFlightBookingsQueryVariables = {
        where: {
          providerOfferId: {
            _eq: offer.id
          }
        }
      }
      const data = await gqlAdminClient.request<GetFlightBookingsQuery>(
        GET_FLIGHT_BOOKINGS,
        params
      )
      if (data.booking_flights?.[0]?.id) {
        orderId = data.booking_flights?.[0]?.id
      } else {
        const createdBooking =
          await gqlAdminClient.request<CreateFlightBookingMutation>(
            CREATE_FLIGHT_BOOKING,
            {
              object: {
                provider: 'DUFFEL',
                providerOfferId: offer.id,
                providerOfferDetails: { offer, passengers },
                userId: session?.user?.id,
                paymentMethodId: +paymentMethodId
              }
            } as CreateFlightBookingMutationVariables
          )
        orderId = createdBooking.insert_booking_flights_one?.id
      }
    }
    if (!orderId) {
      return {
        success: false,
        message: 'Something went wrong '
      }
    }
  } catch (error) {
    console.log(error)
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
  if (orderId) {
    redirect(`/flights/checkout?id=${orderId}`)
  }
}

export { createOrder }
