import React from 'react'
import { Checkbox } from 'antd'
import { RefundFilterType } from '../filterUtils'

interface RefundFilterProps {
  selectedRefundTypes: Array<{ type: RefundFilterType }>
  onChange: (refundTypes: Array<{ type: RefundFilterType }>) => void
}

export const RefundFilter: React.FC<RefundFilterProps> = ({
  selectedRefundTypes,
  onChange
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Refund Type</h3>
      {['Fully Refundable', 'Partially Refundable', 'Non-Refundable'].map(
        (type) => (
          <Checkbox
            key={type}
            checked={selectedRefundTypes.some((rt) => rt.type === type)}
            onChange={(e) => {
              const newRefundTypes = e.target.checked
                ? [...selectedRefundTypes, { type: type as RefundFilterType }]
                : selectedRefundTypes.filter((rt) => rt.type !== type)
              onChange(newRefundTypes)
            }}
          >
            {type}
          </Checkbox>
        )
      )}
    </div>
  )
}
