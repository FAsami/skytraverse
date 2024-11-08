'use server'
import { GET_FLIGHT_BOOKINGS } from '@/app/graphql/query'
import { gqlAdminClient } from '@/app/lib'
import { auth } from '@/auth'
import { ActionResponse } from '@/types/actions'
import {
  GetFlightBookingsQuery,
  GetFlightBookingsQueryVariables
} from '@/types/gql/graphql'
import { DuffelError } from '@duffel/api'

const getBookedFlight = async (id: string): Promise<ActionResponse> => {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return {
        success: false,
        message: 'Unauthorize access'
      }
    }
    const params: GetFlightBookingsQueryVariables = {
      where: {
        id: {
          _eq: Number(id)
        }
      }
    }
    const data = await gqlAdminClient.request<GetFlightBookingsQuery>(
      GET_FLIGHT_BOOKINGS,
      params
    )

    if (data.booking_flights.length > 0) {
      return {
        success: true,
        message: 'Offer  found',
        data: data.booking_flights[0]
      }
    } else {
      return {
        success: false,
        message: 'Failed to get offer'
      }
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
      message: 'Failed to get offer'
    }
  }
}

export { getBookedFlight }
