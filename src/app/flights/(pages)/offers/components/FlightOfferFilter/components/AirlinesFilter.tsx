import React, { useMemo, useState } from 'react'
import { Checkbox, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Offer } from '@duffel/api/types'

interface Airline {
  id: string
  name: string
  logoUrl?: string
  count: number
}

interface AirlineFilterProps {
  offers: Offer[]
  selectedAirlines: string[]
  onChange: (airlines: string[]) => void
}

export const AirlineFilter: React.FC<AirlineFilterProps> = ({
  offers,
  selectedAirlines,
  onChange
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Extract unique airlines with counts from offers
  const airlines = useMemo(() => {
    const airlinesMap = offers.reduce(
      (acc: { [key: string]: Airline }, offer) => {
        const airline = offer.owner
        if (!acc[airline.id]) {
          acc[airline.id] = {
            id: airline.id,
            name: airline.name,
            logoUrl: airline.logo_symbol_url || '',
            count: 1
          }
        } else {
          acc[airline.id].count++
        }
        return acc
      },
      {}
    )

    return Object.values(airlinesMap).sort((a, b) => b.count - a.count)
  }, [offers])

  // Filter airlines based on search term
  const filteredAirlines = useMemo(() => {
    if (!searchTerm) return airlines
    const term = searchTerm.toLowerCase()
    return airlines.filter((airline) =>
      airline.name.toLowerCase().includes(term)
    )
  }, [airlines, searchTerm])

  const handleAirlineToggle = (airlineId: string) => {
    const newSelection = selectedAirlines.includes(airlineId)
      ? selectedAirlines.filter((id) => id !== airlineId)
      : [...selectedAirlines, airlineId]
    onChange(newSelection)
  }

  const handleSelectAll = () => {
    onChange(
      selectedAirlines.length === airlines.length
        ? []
        : airlines.map((a) => a.id)
    )
  }

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Airlines</h3>

      {/* Search Input */}
      <div className="mb-2">
        <Input
          placeholder="Search airlines"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2"
        />
      </div>

      {/* Select All Option */}
      <div className="mb-2 border-b pb-2">
        <Checkbox
          checked={selectedAirlines.length === airlines.length}
          indeterminate={
            selectedAirlines.length > 0 &&
            selectedAirlines.length < airlines.length
          }
          onChange={handleSelectAll}
        >
          Select All
        </Checkbox>
      </div>

      {/* Airlines List */}
      <div className="max-h-60 overflow-y-auto">
        {filteredAirlines.map((airline) => (
          <div key={airline.id} className="flex items-center py-1">
            <Checkbox
              checked={selectedAirlines.includes(airline.id)}
              onChange={() => handleAirlineToggle(airline.id)}
              className="flex-1"
            >
              <div className="flex items-center">
                {airline.logoUrl && (
                  <img
                    src={airline.logoUrl}
                    alt={`${airline.name} logo`}
                    className="w-6 h-6 mr-2 object-contain"
                  />
                )}
                <span>{airline.name}</span>
                <span className="text-gray-400 text-sm ml-2">
                  ({airline.count})
                </span>
              </div>
            </Checkbox>
          </div>
        ))}

        {filteredAirlines.length === 0 && (
          <div className="text-gray-500 text-center py-2">
            No airlines found
          </div>
        )}
      </div>
    </div>
  )
}
