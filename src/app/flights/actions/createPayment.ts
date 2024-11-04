'use server'

import { GET_FLIGHT_BOOKINGS } from '@/app/graphql/query'
import { gqlAdminClient } from '@/app/lib'
import { auth } from '@/auth'
import { ActionResponse } from '@/types/actions'
import {
  CreatePaymentTransactionMutation,
  CreatePaymentTransactionMutationVariables,
  GetFlightBookingsQuery,
  GetFlightBookingsQueryVariables
} from '@/types/gql/graphql'
import { DuffelError } from '@duffel/api'
import { getOfferList } from './getOfferDetails'
import { stripeClient } from '@/app/lib/stripeClient'
import { CREATE_PAYMENT_TRANSACTION } from '@/app/graphql/mutation'
import { redirect } from 'next/navigation'
import { createPaymentLog } from './createPaymentLog'

const createPayment = async (id: string): Promise<ActionResponse | void> => {
  let redirectUrl
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: 'Unauthorize access'
      }
    }
    if (!id) {
      return {
        success: false,
        message: 'Offer id not found'
      }
    }
    if (id) {
      const params: GetFlightBookingsQueryVariables = {
        where: {
          id: {
            _eq: id
          }
        }
      }

      const data = await gqlAdminClient.request<GetFlightBookingsQuery>(
        GET_FLIGHT_BOOKINGS,
        params
      )
      if (data.booking_flights?.[0]?.id) {
        const res = await getOfferList(data.booking_flights[0]?.providerOfferId)
        if (res?.success && res?.data?.data?.id) {
          /**
           * Create payment intent
           */
          const offer = res?.data?.data
          const options: CreatePaymentTransactionMutationVariables = {
            object: {
              bookingId: id,
              amount: Number(offer?.total_amount) * 100,
              status: 'PENDING'
            }
          }
          const data =
            await gqlAdminClient.request<CreatePaymentTransactionMutation>(
              CREATE_PAYMENT_TRANSACTION,
              options
            )
          if (data.insert_payment_transactions_one?.id) {
            const checkoutSession = await stripeClient.checkout.sessions.create(
              {
                payment_method_types: ['card'],
                metadata: {
                  transactionId: data.insert_payment_transactions_one?.id,
                  bookingId: id
                },
                line_items: [
                  {
                    price_data: {
                      currency: 'USD',
                      product_data: {
                        images: [
                          'https://res.cloudinary.com/dffqrc36j/image/upload/v1730125525/logo_ycmy0g.svg'
                        ],
                        name: 'Flight Booking'
                      },
                      unit_amount: Number(offer.total_amount) * 100
                    },
                    quantity: 1
                  }
                ],
                mode: 'payment',
                success_url: `http://localhost:3000/flights/payment/success?id=${id}`,
                cancel_url: `http://localhost:3000/flights/payment/cancel`
              }
            )
            await createPaymentLog({
              transactionId: data.insert_payment_transactions_one?.id,
              status: 'PENDING',
              details: checkoutSession
            })

            if (checkoutSession.url) {
              redirectUrl = checkoutSession.url
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    if (error instanceof DuffelError) {
      return {
        error: error,
        success: false,
        message: error.message
      }
    }
    return {
      error: error,
      success: false,
      message: 'Failed to create offer request'
    }
  }
  if (redirectUrl) {
    redirect(redirectUrl)
  }
}

export { createPayment }
