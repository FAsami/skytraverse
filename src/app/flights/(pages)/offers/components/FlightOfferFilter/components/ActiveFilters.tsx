import React from 'react'
import { Tag } from 'antd'
import { ClockCircleOutlined, DollarOutlined } from '@ant-design/icons'
import { FiltersState } from '../filters'

interface ActiveFiltersProps {
  filters: FiltersState
  onRemoveFilter: (filterKey: keyof FiltersState, value: any) => void
}

const filterColors = {
  price: '#1677ff', // Blue
  airline: '#52c41a', // Green
  refund: '#722ed1', // Purple
  stops: '#fa8c16', // Orange
  departure: '#eb2f96', // Pink
  arrival: '#13c2c2' // Cyan
}

// Add these new constants
const airlineIcons: Record<string, string> = {
  'American Airlines': '/icons/airlines/aa.svg',
  Delta: '/icons/airlines/delta.svg',
  United: '/icons/airlines/united.svg'
  // Add more airlines as needed
}

const timeLabels: Record<string, string> = {
  'early-morning': 'Early Morning (12am - 6am)',
  morning: 'Morning (6am - 12pm)',
  afternoon: 'Afternoon (12pm - 6pm)',
  evening: 'Evening (6pm - 12am)'
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter
}) => {
  const renderTags = () => {
    const tags: { [key: string]: JSX.Element[] } = {
      price: [],
      airlines: [],
      refund: [],
      stops: [],
      departure: [],
      arrival: []
    }

    // Price filter
    if (filters.price.min !== 0 || filters.price.max !== 10000) {
      tags.price.push(
        <Tag
          key="price"
          closable
          color={filterColors.price}
          className="rounded-full flex items-center gap-1"
          onClose={() => onRemoveFilter('price', { min: 0, max: 10000 })}
        >
          <DollarOutlined /> ${filters.price.min} - ${filters.price.max}
        </Tag>
      )
    }

    // Airline filters
    filters.airlines.forEach((airline) => {
      tags.airlines.push(
        <Tag
          key={`airline-${airline}`}
          closable
          color={filterColors.airline}
          className="rounded-full flex items-center gap-1"
          onClose={() => {
            const newAirlines = filters.airlines.filter((a) => a !== airline)
            onRemoveFilter('airlines', newAirlines)
          }}
        >
          <img src={airlineIcons[airline]} alt={airline} className="w-4 h-4" />
          {airline}
        </Tag>
      )
    })

    // Time filters
    filters.times.departure.forEach((time) => {
      tags.departure.push(
        <Tag
          key={`departure-${time}`}
          closable
          color={filterColors.departure}
          className="rounded-full flex items-center gap-1"
          onClose={() => {
            const newTimes = {
              ...filters.times,
              departure: filters.times.departure.filter((t) => t !== time)
            }
            onRemoveFilter('times', newTimes)
          }}
        >
          <ClockCircleOutlined /> Departure: {timeLabels[time]}
        </Tag>
      )
    })

    return Object.values(tags).flat()
  }

  return (
    <div className="flex flex-wrap gap-2">
      {renderTags().length > 0 ? (
        <div className="flex flex-wrap gap-2">{renderTags()}</div>
      ) : (
        <span className="text-gray-500 text-sm">No active filters</span>
      )}
    </div>
  )
}
