'use server'

import { gqlAdminClient } from '@/app/lib'
import { ActionResponse } from '@/types/actions'
import {
  CreateFlightBookingTransactionLogMutation,
  CreateFlightBookingTransactionLogMutationVariables
} from '@/types/gql/graphql'
import { CREATE_FLIGHT_BOOKING_TRANSACTION_LOG } from '@/app/graphql/mutation'

const createFlightBookingLog = async (
  log: CreateFlightBookingTransactionLogMutationVariables['object']
): Promise<ActionResponse | void> => {
  try {
    const logs: CreateFlightBookingTransactionLogMutationVariables = {
      object: log
    }
    await gqlAdminClient.request<CreateFlightBookingTransactionLogMutation>(
      CREATE_FLIGHT_BOOKING_TRANSACTION_LOG,
      logs
    )
    return {
      success: true,
      message: 'Log created'
    }
  } catch (error) {
    console.log(error)
    return {
      error: error,
      success: false,
      message: 'Failed to create flight booking log'
    }
  }
}

export { createFlightBookingLog }
