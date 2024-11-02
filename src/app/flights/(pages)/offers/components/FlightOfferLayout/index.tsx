'use client'

import { Offer } from '@duffel/api/types'
import { FlightOfferFilter, INITIAL_FILTERS } from '../FlightOfferFilter'
import { FlightOffers } from '../FlightOffers'
import { useEffect, useState } from 'react'
import { FiltersState } from '../FlightOfferFilter/filters/types'

const FlightOffersLayout = ({
  initialOffers,
  sort
}: {
  initialOffers: Offer[]
  sort: string
}) => {
  const [offers, setOffers] = useState(initialOffers)
  const [filters, setFilters] = useState<FiltersState>(INITIAL_FILTERS)
  useEffect(() => {
    if (sort) {
      setOffers(initialOffers)
    }
  }, [sort,initialOffers])

  return (
    <div className="w-full flex gap-4 mb-6">
      <div className="w-1/3  bg-white shadow-sm transition-shadow rounded-md">
        <FlightOfferFilter
          offers={initialOffers}
          onFilterChange={setOffers}
          setFilters={setFilters}
          filters={filters}
        />
      </div>
      <div className="w-2/3 rounded-md h-[calc(100vh-var(--header-height)-var(--top-filter-height)-1rem)] overflow-y-auto scrollbar-light">
        <FlightOffers offers={offers} />
      </div>
    </div>
  )
}

export { FlightOffersLayout }
