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
    { value: 'first' as CabinClass, label: 'First Class', icon: <FaPlane /> },
    {
      value: 'business' as CabinClass,
      label: 'Business',
      icon: <FaBusinessTime />
    },
    {
      value: 'premium_economy' as CabinClass,
      label: 'Premium Economy',
      icon: <FaFlagCheckered />
    },
    { value: 'economy' as CabinClass, label: 'Economy', icon: <FaSuitcase /> }
  ]

  return (
    <Select
      value={cabinClass}
      onChange={onCabinClassChange}
      style={{ width: 190 }}
      dropdownStyle={{ minWidth: 190 }}
      suffixIcon={<FaChevronDown />}
      className="!pr-0 bg-primary-50"
      variant="filled"
    >
      {cabinClassOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          <div
            className={clsx('flex items-center', {
              'font-bold': cabinClass === option.value,
              'text-gray-500': cabinClass !== option.value
            })}
          >
            {option.icon}
            <span className="text-sm ml-2">{option.label}</span>
          </div>
        </Select.Option>
      ))}
    </Select>
  )
}

export { CabinClassSelect }
