import { FlightsConditions } from '@duffel/api/types'
import { RefundFilterType } from './types'

export const determineRefundType = (
  conditions: FlightsConditions
): RefundFilterType => {
  if (!conditions.refund_before_departure?.allowed) {
    return 'Non-Refundable'
  }
  const penaltyAmount = Number(
    conditions.refund_before_departure.penalty_amount || 0
  )
  return penaltyAmount === 0 ? 'Fully Refundable' : 'Partially Refundable'
}
