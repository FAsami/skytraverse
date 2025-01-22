import { Offer } from '@duffel/api/types'
import { TimePeriod } from './types'

export const getTimePeriod = (hour: number): TimePeriod => {
  if (hour >= 5 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 17) return 'afternoon'
  if (hour >= 17 && hour < 21) return 'evening'
  return 'night'
}

export const matchesTimeFilter = (
  offer: Offer,
  selectedTimes: TimePeriod[],
  type: 'departure' | 'arrival'
): boolean => {
  if (selectedTimes.length === 0) return true

  return offer.slices.every((slice) => {
    const segments = slice.segments
    const relevantTime =
      type === 'departure'
        ? new Date(segments[0].departing_at)
        : new Date(segments[segments.length - 1].arriving_at)

    const period = getTimePeriod(relevantTime.getHours())
    return selectedTimes.includes(period)
  })
}
