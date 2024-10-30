import { Offer } from '@duffel/api/types'
import { FlightOfferCard } from './FlightOfferCard'

const FlightOffers = ({ offers }: { offers: Offer[] }) => {
  return (
    <div className="space-y-5">
      {offers.map((offer) => (
        <FlightOfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  )
}

export { FlightOffers }
