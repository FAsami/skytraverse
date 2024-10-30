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
      icon: <FaSyncAlt />
    },
    { value: 'one_way', label: 'One-Way', icon: <FaPlaneDeparture /> },
    {
      value: 'multi_city',
      label: 'Multi-City',
      icon: <FaMapMarkedAlt />
    }
  ]

  return (
    <Select
      value={flightType}
      onChange={onFlightTypeChange}
      style={{ width: 190 }}
      dropdownStyle={{ minWidth: 190 }}
      suffixIcon={<FaChevronDown />}
      className="!pr-0 bg-primary-50"
      variant="filled"
    >
      {flightTypeOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          <div
            className={clsx('flex items-center', {
              'font-semibold': flightType === option.value,
              'text-gray-600 text-sm': flightType !== option.value
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

export { FlightTypeSelect }
