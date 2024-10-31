import React from 'react'
import { Tag } from 'antd'
import { FiltersState } from '../filters'

interface ActiveFiltersProps {
  filters: FiltersState
  onRemoveFilter: (filterKey: keyof FiltersState, value: any) => void
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter
}) => {
  const renderTags = () => {
    const tags = []

    // Price Range
    if (filters.price.min !== 0 || filters.price.max !== 10000) {
      tags.push(
        <Tag
          key="price"
          closable
          onClose={() => onRemoveFilter('price', { min: 0, max: 10000 })}
        >
          Price: ${filters.price.min} - ${filters.price.max}
        </Tag>
      )
    }

    // Airlines
    filters.airlines.forEach((airline) => {
      tags.push(
        <Tag
          key={`airline-${airline}`}
          closable
          onClose={() => {
            const newAirlines = filters.airlines.filter((a) => a !== airline)
            onRemoveFilter('airlines', newAirlines)
          }}
        >
          Airline: {airline}
        </Tag>
      )
    })

    // Refund Types
    filters.refundTypes.forEach((refund) => {
      tags.push(
        <Tag
          key={`refund-${refund.type}`}
          closable
          onClose={() => {
            const newRefundTypes = filters.refundTypes.filter(
              (rt) => rt.type !== refund.type
            )
            onRemoveFilter('refundTypes', newRefundTypes)
          }}
        >
          {refund.type}
        </Tag>
      )
    })

    // Stops
    filters.stops.forEach((stop) => {
      tags.push(
        <Tag
          key={`stop-${stop}`}
          closable
          onClose={() => {
            const newStops = filters.stops.filter((s) => s !== stop)
            onRemoveFilter('stops', newStops)
          }}
        >
          {stop === 0 ? 'Non-stop' : `${stop} stop${stop > 1 ? 's' : ''}`}
        </Tag>
      )
    })

    // Times
    const timeLabels = {
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      night: 'Night'
    }

    filters.times.departure.forEach((time) => {
      tags.push(
        <Tag
          key={`departure-${time}`}
          closable
          onClose={() => {
            const newTimes = {
              ...filters.times,
              departure: filters.times.departure.filter((t) => t !== time)
            }
            onRemoveFilter('times', newTimes)
          }}
        >
          Departure: {timeLabels[time]}
        </Tag>
      )
    })

    filters.times.arrival.forEach((time) => {
      tags.push(
        <Tag
          key={`arrival-${time}`}
          closable
          onClose={() => {
            const newTimes = {
              ...filters.times,
              arrival: filters.times.arrival.filter((t) => t !== time)
            }
            onRemoveFilter('times', newTimes)
          }}
        >
          Arrival: {timeLabels[time]}
        </Tag>
      )
    })

    return tags
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {renderTags().length > 0 ? (
        renderTags()
      ) : (
        <span className="text-gray-500">No active filters</span>
      )}
    </div>
  )
}
