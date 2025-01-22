import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { MdFlightTakeoff } from 'react-icons/md'
import { ConfettiWrapper } from './ConfettiWrapper'

const PaymentSuccessPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  const id = (await searchParams).id

  return (
    <div className="px-4">
      <div className="flex relative flex-col items-center justify-center py-10 my-12 bg-white shadow-sm rounded-md mx-auto max-w-screen-sm p-6">
        <div className="absolute inset-0">
          <ConfettiWrapper />
        </div>
        <Image
          alt="Payment Success"
          height={250}
          width={250}
          src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730747751/success_zeu72h.svg"
        />
        <div className="text-3xl text-neutral-600 font-semibold flex items-center gap-2 mt-6">
          Hurray! <MdFlightTakeoff className="text-blue-700" />
        </div>
        <div className="text-base flex-col text-center text-neutral-600 font-semibold flex items-center gap-2 mt-6">
          FLIGHT BOOKING ID <br />{' '}
          <span className="text-4xl inline-block px-2 py-1.5 rounded text-white bg-blue-400">
            {id}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-2 md:mb-8 px-3 md:px-32 text-center mt-4">
          Thanks for your payment. We have received your payment. You will
          receive a message on your phone once it’s confirmed. It usually takes
          1-2 mins.
        </p>

        <Link href={`/account/bookings/${id}`}>
          <Button
            size="large"
            shape="round"
            iconPosition="end"
            icon={<BiChevronRight />}
            type="primary"
          >
            View your bookings
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccessPage
