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

const getUserFlightBookings = async (): Promise<ActionResponse> => {
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
        userId: {
          _eq: session?.user?.id
        }
      }
    }
    const data = await gqlAdminClient.request<GetFlightBookingsQuery>(
      GET_FLIGHT_BOOKINGS,
      params
    )

    if (data.booking_flights) {
      return {
        success: true,
        message: 'Booked flights found',
        data: data.booking_flights
      }
    } else {
      return {
        success: false,
        message: 'Failed to fetch booked flights'
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

export { getUserFlightBookings }
