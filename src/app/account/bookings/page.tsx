import { GetFlightBookingsQuery } from '@/types/gql/graphql'
import { getUserFlightBookings } from '../actions/getUserFlightBookings'
import BookedFlight from './components/BookedFlight'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { BiChevronRight } from 'react-icons/bi'

const BookingsPage = async ({}) => {
  try {
    const bookings = await getUserFlightBookings()
    const flights = bookings.data
      ? (bookings?.data as GetFlightBookingsQuery['booking_flights'])
      : []
    if (bookings.success) {
      if (bookings.data?.length > 0) {
        return (
          <div>
            <div className="text-2xl px-4 font-semibold flex gap-2 items-center border-b pb-4">
              Your bookings
            </div>
            <div className="h-[calc(100vh-var(--header-height)-6rem)] overflow-y-auto p-2 rounded-md py-5">
              <div className="space-y-5">
                {flights.map((node) => {
                  return <BookedFlight bookedFlight={node} key={node.id} />
                })}
              </div>
            </div>
          </div>
        )
      }
      return (
        <div className="px-4">
          <div className="flex flex-col items-center justify-center my-12 bg-white shadow-sm rounded-md mx-auto max-w-screen-sm  p-6">
            <Image
              alt="Not found"
              height={300}
              width={300}
              src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730562569/server_error_w0x6oq.svg"
            />
            <div className="text-2xl text-neutral-600 font-semibold flex items-center gap-2 mt-6">
              You don't have any booking now{' '}
            </div>
            <p className="text-sm text-gray-500 mb-2 md:mb-8 px-3 md:px-32 text-center">
              You can book your first flight.
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
    throw new Error('Failed to fetch booking ')
  }
}

export default BookingsPage
