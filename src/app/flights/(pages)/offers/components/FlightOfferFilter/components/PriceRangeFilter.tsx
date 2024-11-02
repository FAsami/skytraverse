import React, { useEffect } from 'react'
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
  useEffect(() => {
    onChange({ min: priceRange.min, max: priceRange.max })
  }, [onChange,priceRange])

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
          defaultValue={[value.min, value.max]}
          onChange={(newValue: number[]) => {
            onChange({
              min: newValue[0],
              max: newValue[1]
            })
          }}
        />
        <div className="flex justify-between text-sm text-gray-700 mt-1">
          <span className="text-xs font-medium">
            From <strong>{value.min}</strong>
          </span>
          <span className="text-xs font-medium">
            To <strong>{value.max}</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
