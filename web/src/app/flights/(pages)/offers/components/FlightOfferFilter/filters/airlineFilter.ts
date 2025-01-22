import { Offer } from '@duffel/api/types'

export const matchesAirlines = (offer: Offer, airlines: string[]): boolean => {
  if (airlines.length === 0) return true
  return airlines.includes(offer.owner.id)
}
