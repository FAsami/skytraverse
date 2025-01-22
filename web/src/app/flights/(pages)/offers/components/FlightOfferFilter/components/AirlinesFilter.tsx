import React, { useMemo } from 'react'
import { Offer } from '@duffel/api/types'
import { BsAirplane, BsCircle, BsFillCheckCircleFill } from 'react-icons/bs'
import clsx from 'clsx'
import Image from 'next/image'

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
    <div className="border border-neutral-100 p-2 rounded-md">
      <div className="flex items-center justify-between border-b border-b-neutral-100 mb-2">
        <div className="flex items-center">
          <BsAirplane className="text-neutral-700 text-sm font-semibold mb-2 mr-2" />
          <h3 className="text-neutral-600 text-sm font-semibold mb-2">
            Airlines ({airlines.length})
          </h3>
        </div>
        <div
          onClick={handleSelectAll}
          className="flex cursor-pointer text-xs font-semibold text-blue-500 items-center gap-1"
        >
          {selectedAirlines.length === airlines.length ? (
            <BsFillCheckCircleFill className="text-blue-500" />
          ) : (
            <BsCircle className="text-blue-500" />
          )}
          Select All
        </div>
      </div>

      <div className="max-h-60 overflow-y-auto scrollbar-light space-y-2 px-2">
        {airlines.map((airline, index) => (
          <div
            className={clsx('cursor-pointer', {
              'border-b border-b-neutral-100': index < airlines.length - 1
            })}
            key={airline.id}
            onClick={() => handleAirlineToggle(airline.id)}
          >
            <div className="flex items-center gap-3 py-2">
              {selectedAirlines.includes(airline.id) ? (
                <BsFillCheckCircleFill className="text-blue-400" />
              ) : (
                <BsCircle className="text-blue-400" />
              )}
              <div className="flex gap-1 items-center">
                {airline.logoUrl && (
                  <Image
                    src={airline.logoUrl}
                    alt={`${airline.name} logo`}
                    className="w-6 h-6 object-contain"
                    height={24}
                    width={24}
                  />
                )}
                <div className="flex flex-col">
                  <span className="text-xs font-medium">{airline.name}</span>
                  <span className="text-gray-400 text-xs">
                    {airline.count} {airline.count === 1 ? 'flight' : 'flights'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {airlines.length === 0 && (
          <div className="text-gray-500 text-center py-2 col-span-2 text-xs flex items-center justify-center">
            <BsAirplane className="text-gray-500 text-sm mr-2" />
            No airlines found
          </div>
        )}
      </div>
    </div>
  )
}
