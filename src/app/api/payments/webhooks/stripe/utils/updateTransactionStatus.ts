import { createPaymentLog } from '@/app/flights/actions/createPaymentLog'
import {
  UPDATE_FLIGHT_BOOKING,
  UPDATE_PAYMENT_TRANSACTION
} from '@/app/graphql/mutation'
import { gqlAdminClient } from '@/app/lib'
import {
  UpdateFlightBookingMutation,
  UpdateFlightBookingMutationVariables,
  UpdatePaymentTransactionByIdMutation,
  UpdatePaymentTransactionByIdMutationVariables
} from '@/types/gql/graphql'
import Stripe from 'stripe'

const updateTransactionStatus = async (
  transactionId: number,
  bookingId: string,
  status: string,
  details: Stripe.PaymentIntent
) => {
  try {
    await createPaymentLog({ transactionId, status, details })
    // Update payment transaction
    const transactionParams: UpdatePaymentTransactionByIdMutationVariables = {
      id: transactionId,
      _set: { status }
    }
    const transactionRes =
      await gqlAdminClient.request<UpdatePaymentTransactionByIdMutation>(
        UPDATE_PAYMENT_TRANSACTION,
        transactionParams
      )

    // Update flight booking if transaction update succeeded
    if (transactionRes.update_payment_transactions_by_pk?.id) {
      const bookingParams: UpdateFlightBookingMutationVariables = {
        where: { id: { _eq: Number(bookingId) } },
        _set: { status }
      }
      await gqlAdminClient.request<UpdateFlightBookingMutation>(
        UPDATE_FLIGHT_BOOKING,
        bookingParams
      )
    }
  } catch (error) {
    console.error('Error updating transaction or booking:', error)
  }
}
export { updateTransactionStatus }
