export const dynamic = 'force-dynamic'
import { decodeId } from '@/app/utils/IdUtils'
import { notFound } from 'next/navigation'
import { getOfferList } from '../../actions/getOfferList'
import { CreateOfferRequest, ListOffersParams, Offer } from '@duffel/api/types'
import { FlightOffersLayout } from './components/FlightOfferLayout'
import Link from 'next/link'

import { BsArrowDown, BsArrowRight, BsArrowUp } from 'react-icons/bs'
import clsx from 'clsx'
import { decrypt } from '@/app/utils/cryptography'
import { FaArrowLeft, FaCircle } from 'react-icons/fa'
import moment from 'moment'
import { Place } from '@duffel/api/types/shared'

const FlightOffersPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const id = (await searchParams).id
    const sortBy = (await searchParams).sortBy
    const sortOrder = (await searchParams).order
    const query = (await searchParams).query

    if (!id) {
      notFound()
    }
    const sort = getSortOrder(sortBy, sortOrder) as ListOffersParams['sort']
    const result = await getOfferList({
      offer_request_id: decodeId(id),
      sort,
      limit: 200
    })

    if (!result?.success) {
      throw new Error('Something went wrong while trying to fetch offer')
    }
    if (!query) {
      throw new Error('Something went wrong while trying to fetch offer')
    }
    const offerInfo = (await decrypt(
      decodeURIComponent(query)
    )) as CreateOfferRequest
    const offerReq = await formatOfferRequestInfo(offerInfo)
    const offers = result.data.data as Offer[]

    return (
      <div className="max-w-screen-xl px-3 mx-auto">
        <div className="shadow-sm rounded-b-md h-[var(--top-filter-height)] flex sticky top-0 py-4 px-4 flex-wrap w-full bg-white mb-2 border-t z-50 items-center gap-6">
          <div className="flex gap-2 flex-col md:flex-row  flex-1 items-center justify-between">
            {offerInfo && (
              <div className="flex  md:w-full justify-center flex-col gap-1">
                <div className="flex items-center  gap-6">
                  <Link href="/">
                    <FaArrowLeft className="text-blue-500 tex-xs cursor-pointer" />
                  </Link>
                  <div className="font-semibold">{offerReq.origin}</div>
                  <BsArrowRight />
                  <div className="font-semibold">{offerReq.destination}</div>
                </div>
                <div className="text-xs text-neutral-500 flex items-center gap-2">
                  {offerReq.travel_type.charAt(0).toUpperCase() +
                    offerReq.travel_type.slice(1)}
                  <FaCircle className="text-neutral-400 text-[4px]" />{' '}
                  {offerReq.date_range[0]} - {offerReq.date_range[1]}
                  <FaCircle className="text-neutral-400 text-[4px]" />
                  {offerReq?.cabin_class
                    ? offerReq?.cabin_class.charAt(0).toUpperCase() +
                      offerReq?.cabin_class.slice(1)
                    : 'N/A'}{' '}
                  <FaCircle className="text-neutral-400 text-[4px]" />
                  {offerReq.number_of_travellers} Traveller
                  {offerReq.number_of_travellers !== 1 ? 's' : ''}
                </div>
              </div>
            )}
            <div className="flex w-full justify-between items-center">
              <div className="text-neutral-700 font-semibold text-base md:text-lg flex items-center gap-1">
                Listing {offers.length} flights
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={{
                    pathname: '/flights/offers',
                    query: {
                      id: id,
                      sortBy: 'price',
                      query,
                      order: sortOrder === 'desc' ? 'asc' : 'desc'
                    }
                  }}
                  className={clsx(
                    'flex text-neutral-500 gap-1 items-center text-xs md:text-sm font-semibold',
                    { '!text-blue-500': sort?.includes('amount') }
                  )}
                >
                  {sort?.includes('-') ? <BsArrowUp /> : <BsArrowDown />}
                  Price
                </Link>
                <Link
                  href={{
                    pathname: '/flights/offers',
                    query: {
                      id: id,
                      sortBy: 'duration',
                      query,
                      order: sortOrder === 'desc' ? 'asc' : 'desc'
                    }
                  }}
                  className={clsx(
                    'flex text-neutral-700 gap-1 items-center text-xs md:text-sm font-semibold',
                    { '!text-blue-500': sort?.includes('duration') }
                  )}
                >
                  {sort?.includes('-') ? <BsArrowUp /> : <BsArrowDown />}
                  Duration
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FlightOffersLayout initialOffers={offers} sort={sort as string} />
      </div>
    )
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong while trying to fetch offer')
  }
}

export default FlightOffersPage

const getSortOrder = (
  sortBy?: string,
  sortOrder?: string
): 'total_amount' | '-total_amount' | 'total_duration' | '-total_duration' => {
  if (sortBy === 'price') {
    return sortOrder === 'desc'
      ? ('-total_amount' as const)
      : ('total_amount' as const)
  } else if (sortBy === 'duration') {
    return sortOrder === 'desc'
      ? ('-total_duration' as const)
      : ('total_duration' as const)
  }
  return 'total_amount' as const
}

const formatOfferRequestInfo = (
  offerReqinfo: CreateOfferRequest
): {
  cabin_class?: string
  destination: Place['iata_code']
  origin: Place['iata_code']
  date_range: string[]
  number_of_travellers: number
  travel_type: string
} => {
  const { slices } = offerReqinfo
  let travel_type = ''

  if (slices.length === 1) {
    travel_type = 'one way'
    return {
      cabin_class: offerReqinfo.cabin_class,
      destination: slices[0].destination,
      origin: slices[0].origin,
      date_range: [moment(slices[0].departure_date).format('MMM D')],
      number_of_travellers: offerReqinfo.passengers.length,
      travel_type
    }
  } else if (
    slices.length === 2 &&
    slices[0].origin === slices[1].destination &&
    slices[1].origin === slices[0].destination
  ) {
    travel_type = 'round trip'
    return {
      cabin_class: offerReqinfo.cabin_class,
      destination:
        slices.length > 2
          ? slices[slices.length - 1].destination
          : slices[0].destination,
      origin: slices[0].origin,
      date_range: [
        moment(slices[0].departure_date).format('MMM D'),
        moment(slices[1].departure_date).format('MMM D')
      ],
      number_of_travellers: offerReqinfo.passengers.length,
      travel_type
    }
  } else {
    travel_type = 'multi city'
    return {
      cabin_class: offerReqinfo.cabin_class,
      destination: slices[slices.length - 1].destination,
      origin: slices[0].origin,
      date_range: [
        moment(slices[0].departure_date).format('MMM D'),
        moment(slices[slices.length - 1].departure_date).format('MMM D')
      ],
      number_of_travellers: offerReqinfo.passengers.length,
      travel_type
    }
  }
}
