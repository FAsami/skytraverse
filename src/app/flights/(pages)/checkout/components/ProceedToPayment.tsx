'use client'
import { createPayment } from '@/app/flights/actions/createPayment'
import { useReCaptcha } from '@/app/hooks'
import { GetAvailablePaymentMethodsQuery } from '@/types/gql/graphql'
import { Offer } from '@duffel/api/types'
import { Button, Modal } from 'antd'
import Image from 'next/image'
import { useTransition } from 'react'
import { BiSolidError } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'

const ProceedToPayment = ({
  id,
  paymentMethod
}: {
  id: string
  offer: Offer
  paymentMethod: GetAvailablePaymentMethodsQuery['payment_availablePaymentMethods'][0]
}) => {
  const [isPending, startTransition] = useTransition()
  const { verifyReCaptcha } = useReCaptcha()

  const handlePayment = () => {
    try {
      startTransition(async () => {
        const isValid = await verifyReCaptcha('createPayment')
        if (isValid) {
          const result = await createPayment(id)

          if (result?.success === false) {
            Modal.warn({
              title: null,
              icon: null,
              centered: true,
              content: (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="mb-4">
                    <Image
                      alt="Error"
                      height={150}
                      width={150}
                      src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730562569/server_error_w0x6oq.svg"
                    />
                  </div>
                  <p className="text-xl text-red-600 font-semibold">
                    Failed to book your flight
                  </p>
                  <p className="text-ms px-12 mt-2 text-neutral-500 text-center">
                    {result?.message || 'Something went wrong!'}
                  </p>
                </div>
              ),
              closeIcon: <IoIosClose className="text-neutral-600 text-2xl" />,
              footer: null,
              closable: true,
              onClose: Modal.destroyAll
            })
          }
        } else {
          Modal.warn({
            title: null,
            icon: null,
            content: (
              <div className="flex flex-col items-center justify-center py-12">
                <BiSolidError className="text-red-500 text-6xl mb-2" />
                <p className="text-xl text-neutral-600 font-semibold">
                  Something went wrong!
                </p>
                <p className="text-ms px-12 mt-2 text-neutral-500 text-center">
                  Please try again
                </p>
              </div>
            ),
            footer: null,
            closable: false
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full px-3 h-full shadow-sm py-8 rounded flex-col flex items-center justify-center">
      <Button
        type="primary"
        size="large"
        shape="round"
        htmlType="submit"
        loading={isPending}
        onClick={handlePayment}
      >
        Proceed to pay with&nbsp;{paymentMethod?.label}
      </Button>
    </div>
  )
}

export { ProceedToPayment }
