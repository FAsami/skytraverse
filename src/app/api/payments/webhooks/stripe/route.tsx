import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { updateTransactionStatus } from './utils/updateTransactionStatus'
import { getSessionMetadata } from './utils/getSessionMetadata'
import { confirmBookedFlight } from '@/app/flights/actions/confirmBookedFlight'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia'
})

// export const runtime = 'edge'

export const POST = async (req: Request) => {
  const sig = req.headers.get('stripe-signature')
  const body = await req.text()
  let event: Stripe.Event

  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      sig!,
      'whsec_PdFveTwzFfDmDQ1YodTBuRH8FhmBWLgA'
    )
  } catch (error) {
    console.error('WEBHOOK_VERIFICATION_FAILED', error)
    return NextResponse.json(
      { error: 'WEBHOOK_VERIFICATION_FAILED' },
      { status: 400 }
    )
  }

  const paymentIntent = event.data.object as Stripe.PaymentIntent
  const paymentIntentId = paymentIntent.id

  try {
    const metadata = await getSessionMetadata(paymentIntentId)
    if (!metadata) {
      console.error('INVALID_METADATA', metadata)
      return NextResponse.json({ error: 'INVALID_METADATA' }, { status: 400 })
    }

    const transactionId = Number(metadata.transactionId)
    const bookingId = metadata.bookingId
    const status = eventTypeMapping[event.type]
    if (status) {
      const response = await updateTransactionStatus(
        transactionId,
        status,
        paymentIntent
      )
      if (response?.status === 'SUCCEEDED') {
        const result = await confirmBookedFlight(bookingId)
        if (result.success) {
          return NextResponse.json({ received: true })
        }
      }
    } else {
      console.log(`UNHANDLED_EVENT_TYPE ${event.type}`)
    }
  } catch (err) {
    console.error('Error processing webhook event:', err)
    return NextResponse.json(
      { error: 'Error processing event' },
      { status: 500 }
    )
  }
  return NextResponse.json({ received: false, error: 'Something went wrong !' })
}

const eventTypeMapping: Record<string, string | undefined> = {
  'payment_intent.succeeded': 'SUCCEEDED',
  'payment_intent.payment_failed': 'FAILED',
  'payment_intent.canceled': 'CANCELED',
  'payment_intent.requires_action': 'REQUIRES_ACTION'
}
