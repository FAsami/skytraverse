import { stripeClient } from '@/app/lib/stripeClient'
import Stripe from 'stripe'

type SessionMetadata = {
  transactionId: string
  bookingId: string
  brand: string
}

const isMetadataValid = (
  metadata: Stripe.Metadata
): metadata is SessionMetadata => {
  return (
    typeof metadata.transactionId === 'string' &&
    typeof metadata.bookingId === 'string' &&
    typeof metadata.brand === 'string'
  )
}

const getSessionMetadata = async (
  paymentIntentId: string
): Promise<SessionMetadata | null> => {
  const sessions = await stripeClient.checkout.sessions.list({
    payment_intent: paymentIntentId,
    limit: 1
  })
  const metadata = sessions.data[0]?.metadata

  return metadata && isMetadataValid(metadata) ? metadata : null
}
export { getSessionMetadata }
