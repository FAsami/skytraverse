export const dynamic = 'force-dynamic'
import { decodeId } from '@/app/utils/IdUtils'
import { notFound } from 'next/navigation'
import { getOfferList } from '../../actions/getOfferList'
import { ListOffersParams, Offer } from '@duffel/api/types'
import { FlightOffersLayout } from './components/FlightOfferLayout'
import Link from 'next/link'
import {
  BsArrowDown,
  BsArrowUp,
  BsChevronDoubleLeft,
  BsChevronDoubleRight
} from 'react-icons/bs'
import clsx from 'clsx'

const FlightOffersPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const id = (await searchParams).id
    const sortBy = (await searchParams).sortBy
    const sortOrder = (await searchParams).order

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

    const offers = result.data.data as Offer[]

    return (
      <div className="max-w-screen-xl px-3 mx-auto">
        <div className="h-[var(--top-filter-height)] flex sticky top-0 py-4 px-4 flex-wrap w-full bg-white mb-2 border-t z-50 items-center gap-6">
          {/* <Link
            href={{
              pathname: '/flights/offers',
              query: {
                id: id,
                ...(result.data.meta.before && {
                  prev: result.data.meta.before
                })
              }
            }}
            className={clsx(
              'flex text-neutral-500 gap-1 items-center text-xs font-semibold cursor-not-allowed',
              { '!text-blue-500 !cursor-pointer': result.data.meta.before }
            )}
          >
            <BsChevronDoubleLeft />
            Prev
          </Link> */}
          <div className="flex flex-1 items-start justify-between">
            <span className="text-neutral-700 font-semibold text-sm flex items-center gap-1">
              Listing {offers.length} flights
            </span>
            <div className="flex items-center gap-2">
              <Link
                href={{
                  pathname: '/flights/offers',
                  query: {
                    id: id,
                    sortBy: 'price',
                    order: sortOrder === 'desc' ? 'asc' : 'desc'
                  }
                }}
                className={clsx(
                  'flex text-neutral-500 gap-1 items-center text-xs font-semibold',
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
                    order: sortOrder === 'desc' ? 'asc' : 'desc'
                  }
                }}
                className={clsx(
                  'flex text-neutral-700 gap-1 items-center text-xs font-semibold',
                  { '!text-blue-500': sort?.includes('duration') }
                )}
              >
                {sort?.includes('-') ? <BsArrowUp /> : <BsArrowDown />}
                Duration
              </Link>
            </div>
          </div>
          {/* <Link
            href={{
              pathname: '/flights/offers',
              query: {
                id: id,
                ...(result.data.meta.after && { next: result.data.meta.after })
              }
            }}
            className={clsx(
              'flex text-neutral-700 gap-1 items-center text-xs font-semibold cursor-not-allowed',
              { '!text-blue-500 !cursor-pointer': result.data.meta.after }
            )}
          >
            Next
            <BsChevronDoubleRight />
          </Link> */}
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
