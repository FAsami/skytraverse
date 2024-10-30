import { decodeId } from '@/app/utils/IdUtils'
import { notFound } from 'next/navigation'
import { getOfferList } from '../../actions/getOfferList'
import { Offer } from '@duffel/api/types'
import { FlightOffers } from './components/FlightOffers'
import { FlightOfferFilter } from './components/FlightOfferFilter'

const FlightOffersPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const id = (await searchParams).id
    if (!id) {
      notFound()
    }
    const result = await getOfferList({
      offer_request_id: decodeId(id)
    })
    if (!result?.success) {
      throw new Error('Something went wrong while trying to fetch offer')
    }
    const offers = result.data as Offer[]

    return (
      <div className="max-w-screen-xl px-3 mx-auto py-3 flex gap-4">
        <div className="w-1/3 bg-white h-full min-h-[75vh] shadow p-4 transition-shadow rounded-sm sticky top-4">
          <FlightOfferFilter />
        </div>
        <div className="w-2/3 h-full">
          <FlightOffers offers={offers} />
        </div>
      </div>
    )
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong while trying to fetch offer')
  }
}

export default FlightOffersPage
