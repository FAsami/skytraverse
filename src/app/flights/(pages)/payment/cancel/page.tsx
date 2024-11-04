import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const PaymentFailedPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  const id = (await searchParams).id

  return (
    <div className="px-4">
      <div className="flex relative flex-col items-center justify-center py-10 my-12 bg-white shadow-sm rounded-md mx-auto max-w-screen-sm p-6">
        <Image
          alt="Payment Success"
          height={250}
          width={250}
          src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730747711/payment_cancel_u3bhtg.svg"
        />
        <div className="text-3xl text-red-600 font-semibold flex items-center gap-2 mt-6">
          Payment failed !
        </div>
        <p className="text-sm text-gray-500 mb-2 md:mb-8 px-3 md:px-5 text-center mt-4">
          Unfortunately, your payment could not be processed at this time.
          Please check your payment details or try again later. If you continue
          to experience issues, feel free to reach out to our support team for
          assistance.
        </p>
        <Link href={`/flights/checkout?id=${id}`}>
          <Button size="large" shape="round" iconPosition="end" type="primary">
            Try again
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PaymentFailedPage
