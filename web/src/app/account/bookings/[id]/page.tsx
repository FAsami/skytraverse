import { getBookedFlight } from '@/app/flights/actions/getBookedFlight'
import { MdSentimentDissatisfied } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { BsChevronRight } from 'react-icons/bs'
import { BookingDetails } from '../components/BookingDetails'

const BookingsPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  try {
    const id = (await params).id
    const result = await getBookedFlight(id)

    if (result.success) {
      if (result.data && result?.data?.providerOrderDetails) {
        return (
          <div>
            <div className="text-2xl px-4 font-semibold flex gap-2 items-center border-b py-8">
              Your booking <BsChevronRight className="text-sm" /> {id}
            </div>
            <div className="bg-neutral-50 h-[calc(100vh-var(--header-height)-6rem)] overflow-y-auto p-2 rounded-md">
              <BookingDetails booking={result.data} />
            </div>
          </div>
        )
      }

      return (
        <div className="px-4">
          <div className="max-w-md w-full mx-auto flex flex-col items-center justify-center h-full">
            <Image
              alt="Not found"
              height={300}
              width={300}
              src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730562244/page_not_found.svg"
            />
            <div className="text-2xl text-neutral-600 font-semibold flex items-center gap-2 mt-6">
              Sorry <MdSentimentDissatisfied className="text-amber-700" />
            </div>
            <p className="text-sm text-gray-500 mb-2 md:mb-8 px-3 md:px-32 text-center">
              We could not found any resource for you.
            </p>
            <Link href="/">
              <Button
                iconPosition="end"
                icon={<BiChevronRight />}
                type="primary"
              >
                Go Back Home
              </Button>
            </Link>
          </div>
        </div>
      )
    } else {
      throw new Error('Failed to fetch booking ')
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch booking ')
  }
}

export default BookingsPage
