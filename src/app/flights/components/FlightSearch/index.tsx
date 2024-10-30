'use client'
import React, { useState } from 'react'
import { CreateOfferRequest, Place } from '@duffel/api/types'
import { LocationSuggestion } from './LocationSuggestion'
import { Button, DatePicker } from 'antd'
import { FaExchangeAlt, FaSearch } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa6'
import { IoCloseOutline } from 'react-icons/io5'
import { Passengers } from './Passengers'
import { CabinClassSelect } from './CabinClassSelect'
import { FlightType, FlightTypeSelect } from './FlightTypeSelect'
import dayjs from 'dayjs'
import clsx from 'clsx'
import { BiPlus } from 'react-icons/bi'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createOfferRequest } from '../../actions/createOfferRequest'
import { useAction } from '@/app/hooks/useAction'
import { StatusMessage } from '@/app/components/StatusMessage'

const { RangePicker } = DatePicker

const initialOffer: CreateOfferRequest = {
  cabin_class: 'economy',
  passengers: [{ type: 'adult' }],
  slices: [
    {
      origin: 'DAC',
      destination: 'CXB',
      departure_date: dayjs().format('YYYY-MM-DD'),
      arrival_time: null,
      departure_time: null
    },
    {
      origin: 'CXB',
      destination: 'DAC',
      departure_date: dayjs().add(7, 'day').format('YYYY-MM-DD'),
      arrival_time: null,
      departure_time: null
    }
  ]
}
const FlightSearch: React.FC = () => {
  const [type, setType] = useState<FlightType>('return')
  const [offerRequest, setOfferRequest] =
    useState<CreateOfferRequest>(initialOffer)

  const handleDateChange = (date: unknown, dateString: string | string[]) => {
    if (type === 'one_way' && typeof dateString === 'string') {
      setOfferRequest((prev) => ({
        ...prev,
        slices: [{ ...prev.slices[0], departure_date: dateString }]
      }))
    } else if (
      type === 'return' &&
      Array.isArray(dateString) &&
      dateString.length === 2
    ) {
      const [startDate, endDate] = dateString as [string, string]
      setOfferRequest((prev) => ({
        ...prev,
        slices: [
          {
            origin: prev.slices[0].origin,
            destination: prev.slices[0].destination,
            departure_date: startDate,
            arrival_time: null,
            departure_time: null
          },
          {
            origin: prev.slices[0].destination,
            destination: prev.slices[0].origin,
            departure_date: endDate,
            arrival_time: null,
            departure_time: null
          }
        ]
      }))
    }
  }

  const handleExchange = (sliceIndex: number) => {
    console.log(sliceIndex)
    setOfferRequest((prev) => {
      return {
        ...prev,
        slices:
          type === 'return'
            ? [
                {
                  ...prev.slices[0],
                  origin: prev.slices[0].destination,
                  destination: prev.slices[0].origin
                },
                {
                  ...prev.slices[1],
                  origin: prev.slices[1].destination,
                  destination: prev.slices[1].origin
                }
              ]
            : prev.slices.map((slice, i) => {
                if (sliceIndex === i) {
                  return {
                    ...slice,
                    origin: slice.destination,
                    destination: slice.origin
                  }
                }
                return slice
              })
      }
    })
  }

  const handleSelect = (
    sliceIndex: number,
    locationType: 'origin' | 'destination',
    place: Place
  ) => {
    const iataCode = place.iata_code
    if (place.iata_code && typeof iataCode === 'string') {
      console.log(offerRequest, {
        ...offerRequest,
        slices: [
          { ...offerRequest.slices[sliceIndex], [locationType]: iataCode }
        ]
      })
      if (type === 'one_way') {
        setOfferRequest((prev) => ({
          ...prev,
          slices: [{ ...prev.slices[sliceIndex], [locationType]: iataCode }]
        }))
      } else if (type === 'return') {
        setOfferRequest((prev) => ({
          ...prev,
          slices: [
            { ...prev.slices[sliceIndex], [locationType]: iataCode },
            {
              ...prev.slices[sliceIndex + 1],
              [locationType === 'origin' ? 'destination' : 'origin']: iataCode
            }
          ]
        }))
      } else if (type === 'multi_city') {
        setOfferRequest((prev) => ({
          ...prev,
          slices: prev.slices.map((slice, i) => {
            if (i === sliceIndex) {
              return {
                ...slice,
                [locationType]: iataCode
              }
            }
            return slice
          })
        }))
      }
    }
  }
  const handleAddSlice = () => {
    if (type === 'multi_city') {
      setOfferRequest((prev) => ({
        ...prev,
        slices: [
          ...prev.slices,
          {
            arrival_time: null,
            departure_time: null,
            origin: prev.slices[prev.slices.length - 1].destination,
            destination: '',
            departure_date: dayjs(
              prev.slices[prev.slices.length - 1].departure_date
            )
              .add(7, 'day')
              .format('YYYY-MM-DD')
          }
        ]
      }))
    }
  }
  const handleRemoveSlice = (sliceIndex: number) => {
    if (type === 'multi_city') {
      setOfferRequest((prev) => ({
        ...prev,
        slices: prev.slices.filter((slice, i) => i !== sliceIndex)
      }))
    }
  }

  return (
    <div>
      <div className="max-w-screen-lg mx-auto rounded-md bg-white border border-neutral-100 p-8 my-16">
        <div className="pb-2 flex items-center gap-0.5">
          <CabinClassSelect
            cabinClass={offerRequest.cabin_class}
            onCabinClassChange={(val) =>
              setOfferRequest((prev) => ({ ...prev, cabin_class: val }))
            }
          />
          <FlightTypeSelect
            flightType={type}
            onFlightTypeChange={(val) => {
              if (val === 'one_way') {
                setOfferRequest({
                  cabin_class: 'economy',
                  passengers: [{ type: 'adult' }],
                  slices: [
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'DAC',
                      destination: 'CXB',
                      departure_date: dayjs().format('YYYY-MM-DD')
                    }
                  ]
                })
              } else if (val === 'return') {
                setOfferRequest({
                  cabin_class: 'economy',
                  passengers: [{ type: 'adult' }],
                  slices: [
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'DAC',
                      destination: 'CXB',
                      departure_date: dayjs().format('YYYY-MM-DD')
                    },
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'CXB',
                      destination: 'DAC',
                      departure_date: dayjs().add(7, 'day').format('YYYY-MM-DD')
                    }
                  ]
                })
              } else if (val === 'multi_city') {
                setOfferRequest({
                  cabin_class: 'economy',
                  passengers: [{ type: 'adult' }],
                  slices: [
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'DAC',
                      destination: 'CXB',
                      departure_date: dayjs().format('YYYY-MM-DD')
                    },
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'CXB',
                      destination: 'ZYL',
                      departure_date: dayjs().add(7, 'day').format('YYYY-MM-DD')
                    },
                    {
                      arrival_time: null,
                      departure_time: null,
                      origin: 'ZYL',
                      destination: 'CGP',
                      departure_date: dayjs()
                        .add(14, 'day')
                        .format('YYYY-MM-DD')
                    }
                  ]
                })
              }
              setType(val)
            }}
          />
          <div className="ml-4">
            <Passengers
              onPassengerChange={(passengers) =>
                setOfferRequest((prev) => ({ ...prev, passengers }))
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          {type === 'one_way' && (
            <div>
              <div
                key={offerRequest.slices[0].destination}
                className="flex items-center gap-2"
              >
                <div className="w-full">
                  <LocationSuggestion
                    title="Origin"
                    selected={offerRequest.slices[0].origin}
                    onSelect={(place) => handleSelect(0, 'origin', place)}
                  />
                </div>
                <ExchangeButton onExchange={() => handleExchange(0)} />
                <div className="w-full">
                  <LocationSuggestion
                    title="Destination"
                    selected={offerRequest.slices[0].destination}
                    onSelect={(place) => handleSelect(0, 'destination', place)}
                  />
                </div>
                <div className="w-full">
                  <DatePicker
                    suffixIcon={<FaCalendar />}
                    className="min-h-14 text-sm w-full"
                    onChange={(date, dateString) =>
                      handleDateChange(date, dateString)
                    }
                    defaultValue={dayjs(offerRequest.slices[0].departure_date)}
                  />
                </div>
              </div>
            </div>
          )}
          {type === 'return' && (
            <div
              key={offerRequest.slices[0].destination}
              className="flex items-center gap-2"
            >
              <div className="w-full">
                <LocationSuggestion
                  title="Origin"
                  selected={offerRequest.slices[0].origin}
                  onSelect={(place) => handleSelect(0, 'origin', place)}
                />
              </div>
              <ExchangeButton onExchange={() => handleExchange(0)} />
              <div className="w-full">
                <LocationSuggestion
                  title="Destination"
                  selected={offerRequest.slices[0].destination}
                  onSelect={(place) => handleSelect(0, 'destination', place)}
                />
              </div>
              <div className="w-full">
                <RangePicker
                  suffixIcon={<FaCalendar />}
                  className="min-h-14 text-sm w-full"
                  onChange={(date, dateString) =>
                    handleDateChange(date, dateString)
                  }
                  defaultValue={[
                    dayjs(offerRequest.slices[0].departure_date),
                    dayjs(offerRequest.slices[1].departure_date)
                  ]}
                />
              </div>
            </div>
          )}
          {type === 'multi_city' && (
            <div>
              <TransitionGroup className="space-y-4">
                {offerRequest.slices.map((slice, index) => (
                  <CSSTransition
                    key={`${slice.origin}-${slice.destination}-${slice.departure_date}-${index}`}
                    timeout={500}
                    classNames={{
                      enter: 'animate__animated animate__fadeIn',
                      exit: 'animate__animated animate__fadeOut'
                    }}
                  >
                    <div className="flex items-center gap-2 transition-height">
                      <div className="w-full">
                        <LocationSuggestion
                          title="Origin"
                          selected={slice.origin}
                          onSelect={(place) =>
                            handleSelect(index, 'origin', place)
                          }
                        />
                      </div>
                      <ExchangeButton
                        onExchange={() => handleExchange(index)}
                      />
                      <div className="w-full">
                        <LocationSuggestion
                          title="Destination"
                          selected={slice.destination}
                          onSelect={(place) =>
                            handleSelect(index, 'destination', place)
                          }
                        />
                      </div>
                      <div className="w-full">
                        <DatePicker
                          suffixIcon={<FaCalendar />}
                          className="min-h-14 text-sm w-full"
                          onChange={(date, dateString) =>
                            handleDateChange(date, dateString)
                          }
                          defaultValue={dayjs(slice.departure_date)}
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveSlice(index)}
                        className={clsx(
                          'opacity-0',
                          index > 1 && 'opacity-100'
                        )}
                      >
                        <IoCloseOutline className="text-neutral-600 text-xl" />
                      </button>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
              <div className="flex justify-center items-center gap-4 mt-4">
                <Button
                  type="default"
                  icon={<BiPlus className="text-blue-500 text-lg" />}
                  shape="circle"
                  className="flex items-center py-1 px-4 bg-blue-100 border !border-blue-500 text-xs"
                  onClick={handleAddSlice}
                />
              </div>
            </div>
          )}
        </div>
        <SearchFlightButton offerRequest={offerRequest} />
      </div>
    </div>
  )
}

export { FlightSearch }

const ExchangeButton = ({ onExchange }: { onExchange: () => void }) => {
  const [isExchanged, setIsExchanged] = useState(true)
  const [hasClicked, setHasClicked] = useState(false)

  const handleClick = () => {
    onExchange()
    setIsExchanged(!isExchanged)
    setHasClicked(true)
  }

  return (
    <button
      className="flex items-center border p-2 rounded-full"
      onClick={handleClick}
    >
      <FaExchangeAlt
        className={`text-sm text-neutral-500 ${
          hasClicked
            ? isExchanged
              ? 'rotate-clockwise'
              : 'rotate-counter-clockwise'
            : ''
        }`}
        key={isExchanged ? 'clockwise' : 'counterclockwise'}
      />
    </button>
  )
}

const SearchFlightButton = ({
  offerRequest
}: {
  offerRequest: CreateOfferRequest
}) => {
  const [result, isLoading, executeAction, notification] = useAction(
    async () => await createOfferRequest(offerRequest)
  )

  return (
    <div>
      <div className="flex justify-center  mt-6 relative">
        <Button
          loading={isLoading}
          onClick={executeAction}
          type="primary"
          size="large"
          shape="round"
          icon={<FaSearch />}
        >
          Search flight
        </Button>
      </div>
      <CSSTransition
        in={notification}
        timeout={{ enter: 500, exit: 500 }}
        classNames={{
          enter: 'animate__animated animate__fadeIn animate__faster',
          exit: 'animate__animated animate__fadeOut'
        }}
        unmountOnExit
      >
        <div className="flex justify-center pt-1">
          <StatusMessage
            message={result.message}
            success={result.success}
            visible={notification}
          />
        </div>
      </CSSTransition>
    </div>
  )
}
