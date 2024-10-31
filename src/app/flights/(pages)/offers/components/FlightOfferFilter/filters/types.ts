import { BaggageType, FlightsConditions } from '@duffel/api/types'

export type RefundFilterType =
  | 'Fully Refundable'
  | 'Partially Refundable'
  | 'Non-Refundable'

export interface RefundFilter {
  type: RefundFilterType
  maxPenalty?: number
}

export interface PriceFilter {
  min: number
  max: number
}

export type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night'

export interface TimeFilter {
  departure: TimePeriod[]
  arrival: TimePeriod[]
}

export interface FiltersState {
  refundTypes: RefundFilter[]
  airlines: string[]
  price: PriceFilter
  baggageTypes: BaggageType[]
  times: TimeFilter
}
