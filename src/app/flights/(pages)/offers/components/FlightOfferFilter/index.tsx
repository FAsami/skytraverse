import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { Offer } from '@duffel/api/types'
import { AirlineFilter } from './components/AirlinesFilter'
import { FlightTimeFilter } from './components/TimeFilter'
import { PriceRangeFilter } from './components/PriceRangeFilter'
import { RefundFilter } from './components/RefundFilter'
import { FiltersState, filterOffers } from './filters'
import { BsFilter } from 'react-icons/bs'
import { TbReload } from 'react-icons/tb'

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
  baggageTypes: [],
  times: {
    departure: [],
    arrival: []
  }
}

const getActiveFilterCount = (filters: FiltersState): number => {
  let count = 0

  if (filters.refundTypes.length) count++
  if (filters.airlines.length) count++
  if (filters.baggageTypes.length) count++
  if (filters.times.departure.length || filters.times.arrival.length) count++
  if (
    filters.price.min !== INITIAL_FILTERS.price.min ||
    filters.price.max !== INITIAL_FILTERS.price.max
  )
    count++

  return count
}

export const FlightOfferFilter: React.FC<FlightOfferFilterProps> = ({
  offers,
  filters,
  onFilterChange,
  setFilters
}) => {
  const priceRange = React.useMemo(
    () =>
      offers.reduce(
        (acc, offer) => ({
          min: Math.min(acc.min, Number(offer.total_amount)),
          max: Math.max(acc.max, Number(offer.total_amount))
        }),
        { min: Infinity, max: -Infinity }
      ),
    [offers, filters]
  )
  console.log('price Range', priceRange)

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
    <div>
      <div className="sticky top-0 p-4 shadow-sm bg-white z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BsFilter className="text-lg" />
            <h2 className="text font-bold">Filters</h2>
          </div>
          <button
            className="text-sm font-bold text-blue-500 flex items-center gap-1"
            onClick={clearAllFilters}
          >
            <TbReload className="text-sm" />
            Reset filters
            {getActiveFilterCount(filters) > 0
              ? ` (${getActiveFilterCount(filters)})`
              : null}
          </button>
        </div>
      </div>
      <div className="px-2 space-y-3 mt-3">
        <PriceRangeFilter
          priceRange={priceRange}
          value={filters.price}
          onChange={(price) => handleFilterChange('price', price)}
        />
        <AirlineFilter
          offers={offers}
          selectedAirlines={filters.airlines}
          onChange={(airlines) => handleFilterChange('airlines', airlines)}
        />
        <FlightTimeFilter
          value={filters.times}
          onChange={(times) => handleFilterChange('times', times)}
        />
        <RefundFilter
          selectedRefundTypes={filters.refundTypes}
          onChange={(refundTypes) =>
            handleFilterChange('refundTypes', refundTypes)
          }
        />
      </div>
    </div>
  )
}
