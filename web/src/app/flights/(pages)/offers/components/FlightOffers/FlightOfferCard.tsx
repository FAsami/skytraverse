import { formatCurrency } from '@/app/utils/formatCurrency'
import { formatDuration } from '@/app/utils/formatDuration'
import { encodeId } from '@/app/utils/IdUtils'
import { Offer } from '@duffel/api/types'
import { Button } from 'antd'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { CiClock2 } from 'react-icons/ci'
import { IoIosArrowRoundForward } from 'react-icons/io'
import {
  MdFlightLand,
  MdFlightTakeoff,
  MdAirplanemodeActive,
  MdOutlineFlightTakeoff
} from 'react-icons/md'
import { DetailsModal } from './DetailsModal'

const FlightOfferCard = ({
  showBookingLink = false,
  offer
}: {
  showBookingLink?: boolean
  offer: Offer
}) => {
  return (
    <div className="min-w-2xl w-full mx-auto rounded-md shadow p-2 md:p-4 transition-shadow bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <Image
            src={offer.owner?.logo_symbol_url as string}
            alt={`${offer.owner?.name || 'Airline'} logo`}
            className="h-6 md:h-10"
            width={40}
            height={40}
          />
          <div className="text-neutral-500 text-[10px]">{offer.owner.name}</div>
        </div>
        <span className="text-neutral-600 text-base md:text-lg font-semibold">
          {formatCurrency(+offer.total_amount, offer.total_currency)}
        </span>
      </div>
      {offer.slices.map((slice, index) => (
        <div
          key={slice.id}
          className={`${index > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}`}
        >
          {slice.segments.map((segment) => (
            <div
              key={segment.id}
              className="flex flex-col md:flex-row justify-between gap-2"
            >
              <div className="flex flex-1 gap-3 w-full">
                <div className="text-left flex-1 w-full">
                  <p className="font-semibold">
                    {segment.origin?.iata_code || 'N/A'}
                  </p>
                  <p className="text-xs font-normal text-neutral-600">
                    {segment.origin.name || 'N/A'}
                  </p>
                  <p className="text-[10px] text-gray-500 flex items-center">
                    <MdFlightTakeoff className="mr-1 text-gray-500" />
                    {dayjs(segment.departing_at).format('DD MMM')},
                    {dayjs(segment.departing_at).format('hh:mm A')}
                  </p>
                </div>

                <div className="min-w-16 flex items-center flex-col justify-center">
                  <IoIosArrowRoundForward className="text-gray-500 text-xl md:text-4xl self-center" />
                  {segment.stops?.length === 0 && (
                    <div className="text-xs text-neutral-500">(non stop)</div>
                  )}
                </div>

                <div className="text-left flex-1 w-full">
                  <p className="font-semibold">
                    {segment.destination?.iata_code || 'N/A'}
                  </p>
                  <p className="text-xs font-normal text-neutral-600">
                    {segment.destination.name || 'N/A'}
                  </p>
                  <p className="text-[10px] text-gray-500 flex items-center">
                    <MdFlightLand className="mr-1 text-gray-500" />
                    {dayjs(segment.arriving_at).format('DD MMM')},
                    {dayjs(segment.arriving_at).format('hh:mm A')}
                  </p>
                </div>
              </div>
              <div className="text-right flex md:flex-col justify-between py-2 md:py-0">
                <div className="space-y-1">
                  {' '}
                  {segment.operating_carrier?.logo_symbol_url ? (
                    <Image
                      height={24}
                      width={24}
                      alt={segment.operating_carrier?.name}
                      src={segment.operating_carrier?.logo_symbol_url}
                    />
                  ) : (
                    <MdFlightTakeoff />
                  )}
                  <p className="text-xs *:md:text-sm font-medium">
                    {segment.operating_carrier?.name}
                  </p>
                </div>
                <p className="text-xs text-gray-500 flex items-center">
                  <MdAirplanemodeActive className="mr-1 text-gray-500" />
                  {segment.operating_carrier_flight_number}
                </p>
              </div>
            </div>
          ))}
          {slice.duration && (
            <div className="mt-2 flex items-center text-sm text-gray-700">
              <CiClock2 className="mr-1 text-current" />
              <span>{formatDuration(slice.duration)}</span>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-between gap-1 mt-2 md:mt-3">
        <DetailsModal offer={offer} />
        {showBookingLink && (
          <div>
            <Link
              href={`/flights/bookings?id=${encodeURIComponent(
                encodeId(offer.id)
              )}`}
            >
              <Button icon={<MdOutlineFlightTakeoff />} type="primary">
                Book
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export { FlightOfferCard }
