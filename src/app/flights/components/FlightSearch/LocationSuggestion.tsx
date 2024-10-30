'use client'
import { CloseOutlined } from '@ant-design/icons'
import { AutoComplete } from 'antd'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoAirplaneOutline } from 'react-icons/io5'
import { Place } from '@duffel/api/types'
import axios from 'axios'

const initial: Place[] = [
  {
    airports: null,
    icao_code: 'VGHS',
    iata_country_code: 'BD',
    iata_code: 'DAC',
    iata_city_code: 'DAC',
    city_name: 'Dhaka',
    latitude: 23.844185,
    longitude: 90.400279,
    city: null,
    time_zone: 'Asia/Dhaka',
    type: 'airport',
    name: 'Dhaka Shahjalal International Airport',
    id: 'arp_dac_bd'
  }
]

const LocationSuggestion = ({
  title,
  selected,
  onSelect
}: {
  title: string
  selected: string
  onSelect: (place: Place) => void
}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [open, setOpen] = useState(false)
  const [places, setPlaces] = useState<{
    error: any
    loading: boolean
    data: Place[] | null
  }>({
    error: null,
    loading: false,
    data: initial
  })

  return (
    <div>
      {!showSearch && selected ? (
        <SelectedPlace
          iataCode={selected}
          onClick={() => {
            setShowSearch(true)
            setOpen(true)
          }}
        />
      ) : (
        <div className="w-full h-14 rounded-md">
          <AutoComplete
            notFoundContent={<SuggestionEmpty />}
            defaultActiveFirstOption={true}
            onSearch={async (query) => {
              setPlaces({ loading: true, error: null, data: null })
              if (query) {
                try {
                  const response = await axios.get(
                    `/api/flight/places?query=${query}`
                  )
                  if (response.data.success) {
                    setPlaces({
                      loading: false,
                      error: null,
                      data: response.data.data.data
                    })
                  }
                } catch (error) {
                  setPlaces((prev) => ({
                    ...prev,
                    loading: false,
                    error: error
                  }))
                } finally {
                  setPlaces((prev) => ({ ...prev, loading: false }))
                }
              }
            }}
            autoFocus={true}
            onDropdownVisibleChange={(open) => {
              setOpen(open)
              if (open) {
                setPlaces({ loading: false, error: null, data: initial })
              }
            }}
            className="w-full h-full min-h-14"
            placeholder="Flying from Airport/City"
            allowClear={{
              clearIcon: <CloseOutlined className="text-neutral-400" />
            }}
            dropdownStyle={{
              boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)'
            }}
            open={open}
            autoClearSearchValue={true}
            dropdownRender={() => {
              if (places.loading) {
                return <SuggestionSkeleton length={5} />
              }
              if (places.error) {
                return <SuggestionError />
              }
              if (places.data?.length) {
                return (
                  <Suggestions
                    places={places.data}
                    onSelect={(place) => {
                      onSelect(place)
                      setOpen(false)
                      setShowSearch(false)
                    }}
                  />
                )
              } else {
                return <SuggestionEmpty />
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export { LocationSuggestion }

const SuggestionSkeleton = ({ length }: { length: number }) => {
  const skeletonItems = Array.from({ length })

  return (
    <div className="m-2">
      {skeletonItems.map((_, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex items-center gap-2 cursor-pointer pb-2 animate-pulse">
            <div className="w-10 h-8 bg-neutral-300 rounded"></div>
            <div className="bg-neutral-200 text-3xl font-light w-[1px] h-10"></div>
            <div className="flex-1 min-w-0">
              <div className="w-20 h-4 bg-neutral-300 rounded mb-1"></div>
              <div className="w-full h-3 bg-neutral-200 rounded"></div>
            </div>
          </div>
          {index < skeletonItems.length - 1 && (
            <div className="border-b border-neutral-100 my-1"></div>
          )}
        </div>
      ))}
    </div>
  )
}

const Suggestions = ({
  places,
  onSelect
}: {
  places: Place[]
  onSelect: (place: Place) => void
}) => {
  return (
    <div className="m-2 max-h-72 overflow-y-auto">
      {places.map((place, i) => {
        return (
          <div
            onClick={() => onSelect(place)}
            key={place.id}
            className="flex flex-col relative z-50"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <div>
                <div className="font-semibold text-neutral-800">
                  {place.iata_code}
                </div>
              </div>
              <div className="bg-neutral-200 text-3xl font-light w-[1px] h-10"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm">
                  {place.type === 'airport' && place.city_name}
                </div>
                <div
                  title={place.name}
                  className="text-xs text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {place.name}
                </div>
              </div>
            </div>
            {i < places.length - 1 && (
              <div className="border-b border-neutral-100 my-1"></div>
            )}
          </div>
        )
      })}
    </div>
  )
}
const SuggestionError = () => {
  return (
    <div className="m-2 p-5 flex items-center gap-3 text-red-600 h-20">
      <IoAirplaneOutline className="text-red-500 text-3xl" />
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-red-600">
          Unable to fetch suggestions
        </div>
        <div className="text-sm text-red-500">
          Please check your connection and try again.
        </div>
      </div>
    </div>
  )
}

const SuggestionEmpty = () => {
  return (
    <div className="m-2 p-5 flex flex-col items-center justify-center text-neutral-600">
      <FiSearch className="text-neutral-400 text-4xl mb-2 rotate-45" />
      <div className="font-semibold text-neutral-700">No locations found</div>
      <div className="text-sm text-neutral-500">
        Try searching with different keywords.
      </div>
    </div>
  )
}

const SelectedPlace = ({
  iataCode,
  onClick
}: {
  iataCode: string | undefined
  onClick: () => void
}) => {
  const [place, setPlace] = useState<{
    error: any
    loading: boolean
    data: Place | null
  }>({
    error: null,
    loading: true,
    data: null
  })

  useEffect(() => {
    ;(async () => {
      if (iataCode) {
        try {
          const response = await axios.get(
            `/api/flight/places?query=${iataCode}`
          )
          if (response.data.success) {
            setPlace({
              loading: false,
              error: null,
              data: response.data.data.data[0]
            })
          }
        } catch (error) {
          setPlace((prev) => ({
            ...prev,
            loading: false,
            error: error
          }))
        } finally {
          setPlace((prev) => ({ ...prev, loading: false }))
        }
      } else {
        setPlace({
          loading: false,
          error: null,
          data: null
        })
      }
    })()
  }, [])
  if (place.loading) {
    return (
      <div className="w-full h-14 rounded-md border border-neutral-200 px-3 py-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-10 w-8 bg-neutral-300 rounded-sm animate-pulse">
            <div className="font-semibold text-neutral-800"></div>
          </div>
          <div className="bg-neutral-200 text-3xl font-light w-[1px] h-10"></div>
          <div className="flex-1 min-w-0">
            <div className="h-4 w-20 bg-neutral-200 rounded-sm animate-pulse mb-2"></div>
            <div className="h-3 w-full bg-neutral-200 rounded-sm animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }
  if (place.error) {
  }
  if (place.data) {
    return (
      <div className="w-full h-14 rounded-md border border-neutral-200 px-3 py-2 overflow-hidden">
        <div
          onClick={onClick}
          className="flex items-center gap-2 cursor-pointer animate__animated animate__fadeInDown"
        >
          <div>
            <div className="font-semibold text-neutral-800">
              {place.data.iata_code}
            </div>
          </div>
          <div className="bg-neutral-200 text-3xl font-light w-[1px] h-10"></div>
          <div className="flex-1 min-w-0">
            <div className="text-sm">
              {place.data.type === 'airport' && place.data.city_name}
            </div>
            <div
              title={place.data.name}
              className="text-xs text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {place.data.name}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}
