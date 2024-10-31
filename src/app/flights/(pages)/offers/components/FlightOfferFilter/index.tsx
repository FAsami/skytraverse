import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { Button } from 'antd'
import { Offer } from '@duffel/api/types'
import { AirlineFilter } from './components/AirlinesFilter'
import { FlightTimeFilter } from './components/TimeFilter'
import { ActiveFilters } from './components/ActiveFilters'
import { PriceRangeFilter } from './components/PriceRangeFilter'
import { RefundFilter } from './components/RefundFilter'
import { StopsFilter } from './components/StopsFilter'
import { FiltersState, filterOffers } from './filters'

interface FlightOfferFilterProps {
  offers: Offer[]
  filters: FiltersState
  onFilterChange: (filteredOffers: Offer[]) => void
  setFilters: Dispatch<SetStateAction<FiltersState>>
}

export const INITIAL_FILTERS: FiltersState = {
  refundTypes: [],
  airlines: [],
  price: { min: 0, max: 10000 },
  stops: [],
  baggageTypes: [],
  times: {
    departure: [],
    arrival: []
  }
}

export const FlightOfferFilter: React.FC<FlightOfferFilterProps> = ({
  offers,
  filters,
  onFilterChange,
  setFilters
}) => {
  const priceRange = offers.reduce(
    (acc, offer) => ({
      min: Math.min(acc.min, Number(offer.total_amount)),
      max: Math.max(acc.max, Number(offer.total_amount))
    }),
    { min: Infinity, max: -Infinity }
  )

  useEffect(() => {
    const filteredOffers = filterOffers(offers, filters)
    onFilterChange(filteredOffers)
  }, [filters, offers, onFilterChange])

  const clearAllFilters = () => {
    setFilters(INITIAL_FILTERS)
  }

  const handleFilterChange = <K extends keyof FiltersState>(
    filterKey: K,
    value: FiltersState[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value
    }))
  }

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button onClick={clearAllFilters}>Clear All</Button>
      </div>

      <ActiveFilters filters={filters} onRemoveFilter={handleFilterChange} />

      <FlightTimeFilter
        value={filters.times}
        onChange={(times) => handleFilterChange('times', times)}
      />

      <AirlineFilter
        offers={offers}
        selectedAirlines={filters.airlines}
        onChange={(airlines) => handleFilterChange('airlines', airlines)}
      />

      <RefundFilter
        selectedRefundTypes={filters.refundTypes}
        onChange={(refundTypes) =>
          handleFilterChange('refundTypes', refundTypes)
        }
      />

      <PriceRangeFilter
        priceRange={priceRange}
        value={filters.price}
        onChange={(price) => handleFilterChange('price', price)}
      />

      <StopsFilter
        selectedStops={filters.stops}
        onChange={(stops) => handleFilterChange('stops', stops)}
      />
    </div>
  )
}
