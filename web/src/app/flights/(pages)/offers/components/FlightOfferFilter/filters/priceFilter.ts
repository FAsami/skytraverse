import { Offer } from '@duffel/api/types'

export const isWithinPriceRange = (
  offer: Offer,
  min: number,
  max: number
): boolean => {
  const price = Number(offer.total_amount)
  return price >= min && price <= max
}
