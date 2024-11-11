import { duffelClient } from '@/app/lib/duffelClient'
import { getUserFlightBookings } from '../actions/getUserFlightBookings'
import BookingCard from './BookingCard'

const BookingsPage = async () => {
  try {
    const bookings = await getUserFlightBookings()
    const { data } = await duffelClient.orders.get('ord_0000AnqGZSG3QzmoM5LQHI')

    if (bookings.success) {
      return (
        <div>
          <div className="text-2xl px-4 font-semibold flex gap-2 items-center border-b pb-4">
            Previous bookings
          </div>
          <div className="bg-neutral-50 h-[calc(100vh-var(--header-height)-6rem)] overflow-y-auto p-2 rounded-md">
            <BookingCard order={data} />
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
