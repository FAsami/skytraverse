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
        message: 'Booking id not found'
      }
    }
    if (id) {
      const params: GetFlightBookingsQueryVariables = {
        where: {
          id: {
            _eq: Number(id)
          }
        }
      }

      const bookingData = await gqlAdminClient.request<GetFlightBookingsQuery>(
        GET_FLIGHT_BOOKINGS,
        params
      )
      const providerBookingId = bookingData.booking_flights[0]?.providerOfferId
      if (providerBookingId) {
        const res = await getOfferList(providerBookingId)
        if (res?.success && res?.data?.data?.id) {
          /*** Create payment intent **/
          const offer = res?.data?.data
          const options: CreatePaymentTransactionMutationVariables = {
            object: {
              bookingId: Number(id),
              amount: `${parseFloat(
                (Number(offer?.total_amount) * 100).toFixed(2)
              )}`,
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
                  bookingId: id,
                  brand: process.env.BRAND_TITLE!
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
                      unit_amount: parseFloat(
                        (Number(offer?.total_amount) * 100).toFixed(2)
                      )
                    },
                    quantity: 1
                  }
                ],
                mode: 'payment',
                success_url: `${process.env.NEXT_PUBLIC_URL}/flights/payment/success?id=${id}`,
                cancel_url: `${process.env.NEXT_PUBLIC_URL}/flights/payment/cancel`
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
        success: false,
        message: error.message
      }
    }
    return {
      success: false,
      message: 'Failed to create booking'
    }
  }
  if (redirectUrl) {
    redirect(redirectUrl)
  }
}

export { createPayment }
