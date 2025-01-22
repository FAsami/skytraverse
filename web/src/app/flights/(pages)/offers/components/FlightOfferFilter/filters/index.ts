import { Offer } from '@duffel/api/types'
import { FiltersState } from './types'
import { determineRefundType } from './refundFilter'
import { isWithinPriceRange } from './priceFilter'
import { matchesAirlines } from './airlineFilter'
import { matchesTimeFilter } from './timeFilter'

export * from './types'
export * from './refundFilter'
export * from './priceFilter'
export * from './airlineFilter'
export * from './timeFilter'

export const filterOffers = (
  offers: Offer[],
  filters: FiltersState
): Offer[] => {
  return offers.filter((offer) => {
    const refundType = determineRefundType(offer.slices[0].conditions)
    const matchesRefund =
      filters.refundTypes.length === 0 ||
      filters.refundTypes.some((filter) => filter.type === refundType)
    if (!matchesRefund) return false

    if (!isWithinPriceRange(offer, filters.price.min, filters.price.max))
      return false
    if (!matchesAirlines(offer, filters.airlines)) return false
    if (!matchesTimeFilter(offer, filters.times.departure, 'departure'))
      return false
    if (!matchesTimeFilter(offer, filters.times.arrival, 'arrival'))
      return false

    return true
  })
}
