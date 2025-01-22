export const dynamic = 'force-dynamic'
import { auth } from '@/auth'
import { notFound } from 'next/navigation'
import { getBookedFlight } from '../../actions/getBookedFlight'
import BillingDetails from '../bookings/components/BillingDetails'
import { Offer } from '@duffel/api/types'
import { FlightOfferCard } from '../offers/components/FlightOffers/FlightOfferCard'
import { Details } from './components/Details'
import Image from 'next/image'
import { ProceedToPayment } from './components/ProceedToPayment'

const CheckoutPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const id = (await searchParams).id
    if (!id) {
      throw new Error('Id not found !')
    }
    const session = await auth()
    if (!session?.user?.id) {
      notFound()
    }
    const result = await getBookedFlight(id)
    if (!result.success) {
      throw new Error('Offer not found.')
    }
    const offer = result.data?.providerOfferDetails?.offer as Offer

    return (
      <div className="flex flex-col md:flex-row items-start gap-5 max-w-screen-xl mx-auto p-4">
        <div className="space-y-4 w-full order-1 md:-order-10 md:w-2/3">
          <div>
            <div className="font-semibold text-neutral-700 text-lg border-b pb-2 pt-4 mb-1 border-b-neutral-100 flex items-center">
              <div>1.&nbsp;</div>Review your flight
            </div>
            <FlightOfferCard offer={offer} />
          </div>
          <div>
            <div className="font-semibold text-neutral-700 text-lg pb-2 pt-4 mb-1 border-b-neutral-100 flex items-center">
              <div>2.&nbsp;</div>Review travelers details
            </div>
            <Details
              passengers={result.data?.providerOfferDetails?.passengers}
            />
          </div>
          <div>
            <div className="font-semibold text-neutral-700 text-lg border-b pb-2 pt-4 mb-1 border-b-neutral-100 flex items-center">
              <div>3.&nbsp;</div>Selected payment option
            </div>
            <div className="border py-2 px-8 items-center gap-2 rounded inline-flex bg-neutral-50 cursor-pointer">
              <div className="text-sm font-semibold">
                {result.data?.paymentMethod?.label}
              </div>
              <div className="h-10 w-auto">
                <Image
                  height={40}
                  width={100}
                  alt={result.data?.paymentMethod?.label}
                  src={result.data?.paymentMethod?.logo}
                  className="h-full w-auto"
                />
              </div>
            </div>
          </div>

          <ProceedToPayment
            id={id}
            offer={offer}
            paymentMethod={result.data?.paymentMethod}
          />
        </div>
        <BillingDetails offer={offer} />
      </div>
    )
  } catch (error: unknown) {
    console.log('[CHECKOUT ERROR]', error)
    throw new Error('Something went wrong ')
  }
}
export default CheckoutPage
