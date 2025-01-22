'use server'
import { GET_CUSTOMER_DETAILS_BY_USER_ID } from '@/app/graphql/query'
import { gqlAdminClient } from '@/app/lib'
import { auth } from '@/auth'
import { ActionResponse } from '@/types/actions'
import {
  GetCustomerDetailsQuery,
  GetCustomerDetailsQueryVariables
} from '@/types/gql/graphql'

const getCustomerDetails = async (): Promise<ActionResponse> => {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
      return {
        success: false,
        message: 'User id is required'
      }
    }
    const params: GetCustomerDetailsQueryVariables = {
      userId
    }
    const { customer_details } =
      await gqlAdminClient.request<GetCustomerDetailsQuery>(
        GET_CUSTOMER_DETAILS_BY_USER_ID,
        params
      )
    if (customer_details) {
      return {
        success: true,
        message: 'Customer details fetched successfully',
        data: customer_details.length > 0 ? customer_details[0] : undefined
      }
    }
    return {
      success: false,
      message: 'Failed to Profile details'
    }
  } catch (error) {
    return {
      error: error,
      success: false,
      message: 'Failed fetch customer details'
    }
  }
}

export { getCustomerDetails }
