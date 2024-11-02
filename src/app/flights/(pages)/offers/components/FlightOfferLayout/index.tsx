'use client'

import { Offer } from '@duffel/api/types'
import { FlightOfferFilter, INITIAL_FILTERS } from '../FlightOfferFilter'
import { FlightOffers } from '../FlightOffers'
import { useEffect, useState } from 'react'
import { FiltersState } from '../FlightOfferFilter/filters/types'
import { Modal, Button } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { BsFilter } from 'react-icons/bs'

const FlightOffersLayout = ({
  initialOffers,
  sort
}: {
  initialOffers: Offer[]
  sort: string
}) => {
  const [offers, setOffers] = useState(initialOffers)
  const [filters, setFilters] = useState<FiltersState>(INITIAL_FILTERS)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const isSmallScreen = useMediaQuery({ maxWidth: 768 }) // Adjust width as needed

  useEffect(() => {
    if (sort) {
      setOffers(initialOffers)
    }
  }, [sort, initialOffers])

  const handleOpenModal = () => setIsModalVisible(true)
  const handleCloseModal = () => setIsModalVisible(false)

  return (
    <div className="w-full flex gap-4 mb-6">
      {isSmallScreen ? (
        <>
          <div className="fixed bottom-4 right-4 transform z-50">
            <Button
              type="primary"
              onClick={handleOpenModal}
              shape="circle"
              icon={<BsFilter />}
              size="large"
            />
            <div className="text-xs text-neutral-700 text-center">Filter</div>
          </div>

          <Modal
            title="Filter Options"
            open={isModalVisible}
            onCancel={handleCloseModal}
            footer={null}
            className="w-full max-w-sm m-auto"
            centered={true}
          >
            <FlightOfferFilter
              offers={initialOffers}
              onFilterChange={setOffers}
              setFilters={setFilters}
              filters={filters}
            />
          </Modal>
        </>
      ) : (
        <div className="w-1/3 bg-white shadow-sm transition-shadow rounded-md">
          <FlightOfferFilter
            offers={initialOffers}
            onFilterChange={setOffers}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
      )}

      {/* Flight offers list */}
      <div className="w-full md:w-2/3 rounded-md h-[calc(100vh-var(--header-height)-var(--top-filter-height)-1rem)] overflow-y-auto scrollbar-light">
        <FlightOffers offers={offers} />
      </div>
    </div>
  )
}

export { FlightOffersLayout }
