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
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia'
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')
  const body = await req.text()
  let event: Stripe.Event

  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }
  console.log(event)

  switch (event.type) {
    case 'payment_intent.succeeded': {
      try {
        await createPaymentLog({
          transactionId: Number(event.data.object.metadata?.transactionId),
          status: 'SUCCEEDED',
          details: event.data.object
        })
        const params: UpdatePaymentTransactionByIdMutationVariables = {
          id: Number(event.data.object.metadata?.transactionId),
          _set: {
            status: 'SUCCEEDED'
          }
        }
        const res =
          await gqlAdminClient.request<UpdatePaymentTransactionByIdMutation>(
            UPDATE_PAYMENT_TRANSACTION,
            params
          )
        if (res.update_payment_transactions_by_pk?.id) {
          const params: UpdateFlightBookingMutationVariables = {
            where: {
              id: {
                _eq: event.data.object.metadata?.bookingId
              }
            },
            _set: {
              status: 'SUCCEEDED'
            }
          }
          await gqlAdminClient.request<UpdateFlightBookingMutation>(
            UPDATE_FLIGHT_BOOKING,
            params
          )
        }
      } catch (err) {
        console.error('Error saving transaction:', err)
      }
      break
    }

    case 'payment_intent.payment_failed': {
      try {
        await createPaymentLog({
          transactionId: Number(event.data.object.metadata?.transactionId),
          status: 'FAILED',
          details: event.data.object
        })
        const params: UpdatePaymentTransactionByIdMutationVariables = {
          id: Number(event.data.object.metadata?.transactionId),
          _set: {
            status: 'FAILED'
          }
        }
        const res =
          await gqlAdminClient.request<UpdatePaymentTransactionByIdMutation>(
            UPDATE_PAYMENT_TRANSACTION,
            params
          )
        if (res.update_payment_transactions_by_pk?.id) {
          const params: UpdateFlightBookingMutationVariables = {
            where: {
              id: {
                _eq: event.data.object.metadata?.bookingId
              }
            },
            _set: {
              status: 'FAILED'
            }
          }
          await gqlAdminClient.request<UpdateFlightBookingMutation>(
            UPDATE_FLIGHT_BOOKING,
            params
          )
        }
      } catch (err) {
        console.error('Error saving failed transaction:', err)
      }
      break
    }

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
