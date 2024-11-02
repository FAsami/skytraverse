import React from 'react'
import { Select } from 'antd'
import {
  FaPlane,
  FaBusinessTime,
  FaFlagCheckered,
  FaSuitcase,
  FaChevronDown
} from 'react-icons/fa'
import clsx from 'clsx'
import { CabinClass } from '@duffel/api/types'

interface CabinClassSelectProps {
  cabinClass: CabinClass | undefined
  onCabinClassChange: (value: CabinClass) => void
}

const CabinClassSelect: React.FC<CabinClassSelectProps> = ({
  cabinClass,
  onCabinClassChange
}) => {
  const cabinClassOptions = [
    {
      value: 'first' as CabinClass,
      label: 'First class',
      icon: <FaPlane className="text-neutral-700" />
    },
    {
      value: 'business' as CabinClass,
      label: 'Business',
      icon: <FaBusinessTime className="text-neutral-700" />
    },
    {
      value: 'premium_economy' as CabinClass,
      label: 'Premium economy',
      icon: <FaFlagCheckered className="text-neutral-700" />
    },
    {
      value: 'economy' as CabinClass,
      label: 'Economy',
      icon: <FaSuitcase className="text-neutral-700" />
    }
  ]

  return (
    <Select
      value={cabinClass}
      onChange={onCabinClassChange}
      dropdownStyle={{ minWidth: 180 }}
      suffixIcon={
        <FaChevronDown className="text-neutral-400 translate-y-[1px]" />
      }
      className="!pr-0 !bg-transparent"
      variant="borderless"
      size="small"
    >
      {cabinClassOptions.map((option) => (
        <Select.Option
          className="!p-2 md:p-3 !min-h-0"
          key={option.value}
          value={option.value}
        >
          <div
            className={clsx('flex items-center', {
              'font-semibold': cabinClass === option.value,
              'text-gray-500': cabinClass !== option.value
            })}
          >
            {option.icon}
            <span className="text-xs text-neutral-700 font-semibold md:text-sm ml-2">
              {option.label}
            </span>
          </div>
        </Select.Option>
      ))}
    </Select>
  )
}

export { CabinClassSelect }
