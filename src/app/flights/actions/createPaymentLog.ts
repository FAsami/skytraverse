'use server'

import { gqlAdminClient } from '@/app/lib'
import { auth } from '@/auth'
import { ActionResponse } from '@/types/actions'
import {
  CreatePaymentTransactionLogMutation,
  CreatePaymentTransactionLogMutationVariables
} from '@/types/gql/graphql'
import { CREATE_PAYMENT_TRANSACTION_LOG } from '@/app/graphql/mutation'

const createPaymentLog = async (
  log: CreatePaymentTransactionLogMutationVariables['object']
): Promise<ActionResponse | void> => {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: 'Unauthorize access'
      }
    }
    const logs: CreatePaymentTransactionLogMutationVariables = {
      object: log
    }

    await gqlAdminClient.request<CreatePaymentTransactionLogMutation>(
      CREATE_PAYMENT_TRANSACTION_LOG,
      logs
    )
    return {
      success: true,
      message: 'Log created'
    }
  } catch (error) {
    return {
      error: error,
      success: false,
      message: 'Failed to create payment log'
    }
  }
}

export { createPaymentLog }
