import { duffelClient } from '@/app/lib/duffelClient'
import { decodeId } from '@/app/utils/IdUtils'
import { FlightOfferCard } from '../offers/components/FlightOffers/FlightOfferCard'
import { DuffelError } from '@duffel/api'
import BillingDetails from './components/BillingDetails'
import TravelerDetails from './components/TravelerDetails'

const FlightBookingPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const id = (await searchParams).id
    if (!id) {
      throw new Error('Id not found !')
    }
    const offerId = await decodeId(decodeURIComponent(id))
    if (!offerId) {
      throw new Error('OfferId not found !')
    }
    console.log('offerId', offerId)

    const res = await duffelClient.offers.get(offerId)
    const offer = res.data

    return (
      <div className="flex flex-col md:flex-row items-start gap-5 max-w-screen-xl mx-auto p-4">
        <div className="space-y-4 w-full order-1 md:-order-10 md:w-2/3">
          <div>
            <div className="font-semibold text-neutral-700 text-lg border-b pb-2 pt-4 mb-1 border-b-neutral-100 flex items-center">
              <div>1.&nbsp;</div>Review your flight
            </div>
            <FlightOfferCard offer={res.data} />
          </div>
          <TravelerDetails offer={offer} />
        </div>
        <BillingDetails offer={offer} />
      </div>
    )
  } catch (error) {
    if (error instanceof DuffelError) {
      if (
        error.errors.some((node) => node.code === 'offer_no_longer_available')
      ) {
        throw new Error(error.message)
      }
      throw new Error(error.message)
    }
    throw new Error('Something went wrong ')
  }
}
export default FlightBookingPage
