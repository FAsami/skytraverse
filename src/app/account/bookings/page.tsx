import { notFound } from 'next/navigation'
import { getUserFlightBookings } from '../actions/getUserFlightBookings'

const BookingsPage = async () => {
  try {
    const bookings = await getUserFlightBookings()
    if (bookings.success) {
      if (bookings.data?.length) {
        return <div>{JSON.stringify(bookings)}</div>
      } else {
        notFound()
      }
    } else {
      throw new Error('Failed to fetch booking ')
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch booking ')
  }
}

export default BookingsPage
