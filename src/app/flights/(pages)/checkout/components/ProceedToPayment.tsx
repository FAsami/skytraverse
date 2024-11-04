'use client'
import { createPayment } from '@/app/flights/actions/createPayment'
import { useAction } from '@/app/hooks/useAction'
import { GetAvailablePaymentMethodsQuery } from '@/types/gql/graphql'
import { Offer } from '@duffel/api/types'
import { Button } from 'antd'

const ProceedToPayment = ({
  id,
  paymentMethod
}: {
  id: string
  offer: Offer
  paymentMethod: GetAvailablePaymentMethodsQuery['payment_availablePaymentMethods'][0]
}) => {
  const [result, isLoading, executeAction, notification] = useAction(
    async () => await createPayment(id)
  )
  console.log(result, isLoading, executeAction, notification)

  return (
    <div className="w-full px-3 h-full shadow-sm py-8 rounded flex-col flex items-center justify-center">
      <Button
        type="primary"
        size="large"
        shape="round"
        htmlType="submit"
        loading={isLoading}
        onClick={executeAction}
      >
        Proceed to pay with&nbsp;{paymentMethod?.label}
      </Button>
    </div>
  )
}

export { ProceedToPayment }
