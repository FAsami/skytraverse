'use server'
import { CreateOrderPassenger, Offer } from '@duffel/api/types'
import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'
import { gqlAdminClient } from '@/app/lib'
import { CREATE_FLIGHT_BOOKING } from '@/app/graphql/mutation'
import {
  CreateFlightBookingMutation,
  CreateFlightBookingMutationVariables
} from '@/types/gql/graphql'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'

const createOrder = async (
  offer: Offer,
  passengers: CreateOrderPassenger[]
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
    try {
      const data = await gqlAdminClient.request<CreateFlightBookingMutation>(
        CREATE_FLIGHT_BOOKING,
        {
          object: {
            provider: 'DUFFEL',
            providerOfferId: offer.id,
            providerOfferDetails: { offer, passengers },
            userId: session?.user?.id
          }
        } as CreateFlightBookingMutationVariables
      )
      if (data.insert_booking_flights_one?.id) {
        orderId = data.insert_booking_flights_one?.id
      } else {
        return {
          success: false,
          message: 'Something went wrong'
        }
      }
    } catch (error) {
      console.log('GQL ERROR: ', error)
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
