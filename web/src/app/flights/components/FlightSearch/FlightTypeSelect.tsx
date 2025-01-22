import React from 'react'
import { Select } from 'antd'
import {
  FaSyncAlt,
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaChevronDown
} from 'react-icons/fa'
import clsx from 'clsx'

export type FlightType = 'return' | 'one_way' | 'multi_city'

interface FlightTypeSelectProps {
  flightType: FlightType
  onFlightTypeChange: (value: FlightType) => void
}

const FlightTypeSelect: React.FC<FlightTypeSelectProps> = ({
  flightType,
  onFlightTypeChange
}) => {
  const flightTypeOptions = [
    {
      value: 'return',
      label: 'Return',
      icon: <FaSyncAlt className="text-neutral-700" />
    },
    {
      value: 'one_way',
      label: 'One-Way',
      icon: <FaPlaneDeparture className="text-neutral-700" />
    },
    {
      value: 'multi_city',
      label: 'Multi-City',
      icon: <FaMapMarkedAlt className="text-neutral-700" />
    }
  ]

  return (
    <Select
      value={flightType}
      onChange={onFlightTypeChange}
      dropdownStyle={{ minWidth: 180 }}
      suffixIcon={
        <FaChevronDown className="text-neutral-400 translate-y-[1px]" />
      }
      className="!pr-0 !bg-transparent"
      variant="borderless"
      size="small"
    >
      {flightTypeOptions.map((option) => (
        <Select.Option
          className="!p-2 md:p-3 !min-h-0"
          key={option.value}
          value={option.value}
        >
          <div
            className={clsx('flex items-center', {
              'font-semibold': flightType === option.value,
              'text-gray-600 text-sm': flightType !== option.value
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

export { FlightTypeSelect }
