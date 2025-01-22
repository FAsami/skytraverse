'use server'
import { ActionResponse } from '@/types/actions'
import { auth } from '@/auth'
import { getCustomerDetails } from './getCustomerDetails'
import { gqlAdminClient } from '@/app/lib'
import {
  CreateCustomerDetailsMutation,
  CreateCustomerDetailsMutationVariables,
  UpdateCustomerDetailsMutation,
  UpdateCustomerDetailsMutationVariables
} from '@/types/gql/graphql'
import {
  CREATE_CUSTOMER_DETAILS,
  UPDATE_CUSTOMER_DETAILS
} from '@/app/graphql/mutation'

const updateCustomerDetails = async (
  customerDetails:
    | CreateCustomerDetailsMutationVariables['object']
    | UpdateCustomerDetailsMutationVariables['_set']
): Promise<ActionResponse> => {
  console.log('customerDetails', customerDetails)
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: 'Unauthorize access'
      }
    }
    const data = await getCustomerDetails()
    if (data.data) {
      const params: UpdateCustomerDetailsMutationVariables = {
        where: {
          id: {
            _eq: data.data.id
          }
        },
        _set: customerDetails
      }
      const response =
        await gqlAdminClient.request<UpdateCustomerDetailsMutation>(
          UPDATE_CUSTOMER_DETAILS,
          params
        )

      if (response.update_customer_details?.affected_rows) {
        return {
          success: true,
          message: 'Updated successfully'
        }
      }
    } else {
      try {
        const params: CreateCustomerDetailsMutationVariables = {
          object: {
            ...customerDetails,
            userId: session?.user?.id
          }
        }
        const response =
          await gqlAdminClient.request<CreateCustomerDetailsMutation>(
            CREATE_CUSTOMER_DETAILS,
            params
          )

        if (response.insert_customer_details_one?.userId) {
          return {
            success: true,
            message: 'Updated successfully'
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      success: false,
      message: 'Failed to update customer details'
    }
  } catch (error) {
    return {
      error: error,
      success: false,
      message: 'Failed to create offer request'
    }
  }
}

export { updateCustomerDetails }
