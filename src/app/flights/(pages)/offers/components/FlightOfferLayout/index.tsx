'use client'

import { Offer } from '@duffel/api/types'
import { FlightOfferFilter, INITIAL_FILTERS } from '../FlightOfferFilter'
import { FlightOffers } from '../FlightOffers'
import { useState } from 'react'
import { ActiveFilters } from '../FlightOfferFilter/components/ActiveFilters'
import { FiltersState } from '../FlightOfferFilter/filters/types'

const FlightOffersLayout = ({ initialOffers }: { initialOffers: Offer[] }) => {
  const [offers, setOffers] = useState(initialOffers)
  const [filters, setFilters] = useState<FiltersState>(INITIAL_FILTERS)

  const handleRemoveFilter = <K extends keyof FiltersState>(
    filterKey: K,
    value: FiltersState[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value
    }))
  }

  return (
    <>
      <div className="w-1/3 h-[calc(100vh-116px)] overflow-y-auto scrollbar-light bg-white shadow-sm transition-shadow rounded sticky top-4">
        <FlightOfferFilter
          offers={initialOffers}
          onFilterChange={setOffers}
          setFilters={setFilters}
          filters={filters}
        />
      </div>
      <div className="w-2/3 h-full">
        <div className="mb-4">
          <ActiveFilters
            filters={filters}
            onRemoveFilter={handleRemoveFilter}
          />
        </div>
        <FlightOffers offers={offers} />
      </div>
    </>
  )
}

export { FlightOffersLayout }
