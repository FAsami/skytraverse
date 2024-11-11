import { formatCurrency } from '@/app/utils/formatCurrency'
import { GetFlightBookingsQuery } from '@/types/gql/graphql'
import { Order } from '@duffel/api/types'
import { Button } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

const BookedFlight = ({
  bookedFlight
}: {
  bookedFlight: GetFlightBookingsQuery['booking_flights'][0]
}) => {
  const offer = bookedFlight?.providerOfferDetails?.offer as Order
  const isConfirmed = bookedFlight.status === 'SUCCEEDED' ? true : false
  return (
    <div className="border-b">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1 flex items-center gap-4">
          <div className="font-semibold">#{bookedFlight.id}</div>
          <Image
            src={offer.owner?.logo_symbol_url as string}
            alt={`${offer.owner?.name || 'Airline'} logo`}
            className="h-6 md:h-10"
            width={32}
            height={32}
          />
          <div className="text-neutral-500 text-[10px] mt-2">
            {offer.owner.name}
          </div>
        </div>
        <div>
          {offer.slices.map((node) => {
            return (
              <div className="flex items-center font-semibold text-base gap-2">
                {node.origin.iata_code}
                <BsArrowRight />
                {node.destination.iata_code}
              </div>
            )
          })}
        </div>
        <div>
          <span className="text-neutral-600 text-base md:text-lg font-semibold">
            {formatCurrency(+offer.total_amount, offer.total_currency)}
          </span>
          &nbsp; &nbsp;
          <span
            className={clsx(
              'text-xs font-semibold rounded-full text-amber-900 bg-amber-100 py-1.5 px-2',
              { '!text-green-900 !bg-green-100': isConfirmed }
            )}
          >
            {isConfirmed ? 'Confirmed' : 'Pending'}
          </span>
        </div>
        <div>
          <Link href={`/account/bookings/${bookedFlight.id}`}>
            <Button iconPosition="end" icon={<BiChevronRight />} type="link">
              View details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookedFlight
