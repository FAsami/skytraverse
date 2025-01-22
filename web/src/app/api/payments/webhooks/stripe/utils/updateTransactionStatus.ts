import { createPaymentLog } from '@/app/flights/actions/createPaymentLog'
import { UPDATE_PAYMENT_TRANSACTION } from '@/app/graphql/mutation'
import { gqlAdminClient } from '@/app/lib'
import {
  UpdatePaymentTransactionByIdMutation,
  UpdatePaymentTransactionByIdMutationVariables
} from '@/types/gql/graphql'
import Stripe from 'stripe'

const updateTransactionStatus = async (
  transactionId: number,
  status: string,
  details: Stripe.PaymentIntent
): Promise<
  | (
      | UpdatePaymentTransactionByIdMutation['update_payment_transactions_by_pk']
      | null
    )
  | void
> => {
  try {
    await createPaymentLog({ transactionId, status, details })
    const transactionParams: UpdatePaymentTransactionByIdMutationVariables = {
      id: transactionId,
      _set: { status }
    }
    const paymentTransaction =
      await gqlAdminClient.request<UpdatePaymentTransactionByIdMutation>(
        UPDATE_PAYMENT_TRANSACTION,
        transactionParams
      )

    return paymentTransaction.update_payment_transactions_by_pk
  } catch (error) {
    console.error('Error updating transaction or booking:', error)
  }
}
export { updateTransactionStatus }
