import { useEffect, useState, useTransition } from 'react'
import clsx from 'clsx'
import { getAvailablePaymentMethods } from '@/app/flights/actions/getAvailablePaymentMethods'
import { GetAvailablePaymentMethodsQuery } from '@/types/gql/graphql'
import Image from 'next/image'

const PaymentMethods = ({
  value,
  onChange
}: {
  value: string
  onChange: (val: string) => void
}) => {
  const [isPending, startTransition] = useTransition()
  const [availablePaymentOptions, setAvailablePaymentOptions] = useState<
    GetAvailablePaymentMethodsQuery['payment_availablePaymentMethods']
  >([])

  useEffect(() => {
    startTransition(async () => {
      const res = await getAvailablePaymentMethods()

      if (res.data && res.data.length > 0) {
        setAvailablePaymentOptions(res.data)
        onChange(`${res.data[0]?.id}`)
      } else {
        setAvailablePaymentOptions([])
      }
    })
  }, [])

  return (
    <div>
      <div className="flex w-full justify-start gap-2">
        {isPending ? (
          <>
            <div className="w-24 h-16 bg-gray-200 animate-pulse rounded" />
            <div className="w-24 h-16 bg-gray-200 animate-pulse rounded" />
          </>
        ) : availablePaymentOptions.length === 0 ? (
          <div className="text-gray-500 text-sm">
            No payment methods available.
          </div>
        ) : (
          availablePaymentOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => onChange(`${option.id}`)}
              className={clsx(
                'border py-2 px-8 items-center gap-2 rounded inline-flex bg-neutral-50 cursor-pointer',
                { 'border-blue-500 bg-blue-50': value === `${option.id}` }
              )}
            >
              <div className="text-sm font-semibold">Pay via</div>
              <div className="h-10 w-auto">
                <Image
                  height={40}
                  width={100}
                  alt={option.label}
                  src={option.logo}
                  className="h-full w-auto"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export { PaymentMethods }
