import React from 'react'
import { Slider } from 'antd'

interface PriceRangeFilterProps {
  priceRange: { min: number; max: number }
  value: { min: number; max: number }
  onChange: (value: { min: number; max: number }) => void
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  priceRange,
  value,
  onChange
}) => {
  return (
    <div className="border border-neutral-100 p-2 rounded-md">
      <div className="flex items-center justify-between border-b border-b-neutral-100 mb-2">
        <div className="flex items-center">
          <h3 className="text-neutral-600 text-sm font-semibold mb-2 mr-2">
            Price
          </h3>
        </div>
      </div>
      <div className="px-2">
        <Slider
          range
          min={priceRange.min}
          max={priceRange.max}
          value={[value.min, value.max]}
          onChange={(newValue: number[]) => {
            onChange({
              min: newValue[0],
              max: newValue[1]
            })
          }}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span className="text-xs">From {value.min}</span>
          <span className="text-xs">To {value.max}</span>
        </div>
      </div>
    </div>
  )
}
