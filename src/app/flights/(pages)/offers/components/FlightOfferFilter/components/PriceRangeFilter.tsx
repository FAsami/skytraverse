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
    <div className="mb-6">
      <h3 className="font-medium mb-2">Price Range</h3>
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
          <span>${value.min}</span>
          <span>${value.max}</span>
        </div>
      </div>
    </div>
  )
}
