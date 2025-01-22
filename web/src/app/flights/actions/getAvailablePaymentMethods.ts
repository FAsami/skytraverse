'use server'
import { GET_AVAILABLE_PAYMENT_METHODS } from '@/app/graphql/query'
import { gqlAdminClient } from '@/app/lib'
import { ActionResponse } from '@/types/actions'
import { GetAvailablePaymentMethodsQuery } from '@/types/gql/graphql'

const getAvailablePaymentMethods = async (): Promise<ActionResponse> => {
  try {
    const data = await gqlAdminClient.request<GetAvailablePaymentMethodsQuery>(
      GET_AVAILABLE_PAYMENT_METHODS
    )
    return {
      data: data.payment_availablePaymentMethods,
      success: true,
      message: 'Found available payment methods'
    }
  } catch (error) {
    return {
      error: error,
      success: false,
      message: 'Failed to get offer'
    }
  }
}

export { getAvailablePaymentMethods }
