import { Order } from '@duffel/api/types'
import Image from 'next/image'
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md'
import dayjs from 'dayjs'
import { formatDuration } from '@/app/utils/formatDuration'
import { CiClock2 } from 'react-icons/ci'
import { Timeline } from 'antd'
import { BsArrowRight, BsDot, BsLuggage } from 'react-icons/bs'
import { Details } from '@/app/flights/(pages)/checkout/components/Details'
import { formatCurrency } from '@/app/utils/formatCurrency'
import { GetFlightBookingsQuery } from '@/types/gql/graphql'
import clsx from 'clsx'

const BookingDetails = ({
  booking
}: {
  booking: GetFlightBookingsQuery['booking_flights'][0]
}) => {
  const order = booking.providerOrderDetails
    ? (booking.providerOrderDetails as Order)
    : (booking.providerOfferDetails?.offer as Order)
  const isConfirmed = booking.status === 'SUCCEEDED' ? true : false
  return (
    <div className="min-w-2xl relative  w-full mx-auto rounded-md border border-blue-50 p-2 md:p-4 transition-shadow bg-white">
      <div
        className={clsx(
          'text-lg font-bold absolute top-0 left-0 bg-green-100 text-green-600 px-4 py-1 rounded-br-md border-neutral-600',
          {
            'text-amber-900 bg-amber-100': isConfirmed
          }
        )}
      >
        Oder ID - {booking.id}
        <div className="text-xs font-light text-neutral-500">
          Last updated on&nbsp;
          {dayjs(order.synced_at).format('DD MMM,YYYY HH:ss A')}
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-end justify-center flex-col">
          <button
            className={clsx(
              'bg-green-100 py-1.5 font-semibold text-green-900 text-sm rounded-full px-3',
              { 'text-amber-900 bg-amber-100': isConfirmed }
            )}
          >
            {isConfirmed ? 'Confirmed' : 'Not confirmed'}
          </button>
        </div>
      </div>
      <div className="text-xl font-semibold text-center  pt-8 pb-3 mb-3  text-neutral-700">
        Journey details
      </div>
      <div className="space-y-1 border p-4 rounded-md">
        {order.slices.map((slice) => (
          <div key={slice.id} className={`p-4 pb-0 bg-white rounded-md`}>
            {slice.segments.map((segment) => {
              const stop = segment.stops.find(
                (node) =>
                  node.airport.iata_code === segment.destination.iata_code
              )
              return (
                <div key={segment.id}>
                  <div className="gap-4 flex items-center mb-6 pb-4">
                    <div className="h-10 w-10">
                      {segment.operating_carrier?.logo_symbol_url ? (
                        <Image
                          height={40}
                          width={40}
                          alt={segment.operating_carrier?.name}
                          src={segment.operating_carrier?.logo_symbol_url}
                        />
                      ) : (
                        <MdFlightTakeoff />
                      )}
                    </div>
                    <div>
                      <div>
                        <div className="flex *:text-base text-neutral-800 font-semibold items-center gap-1">
                          <div>
                            {dayjs(segment.departing_at).format(
                              'DD MMM,HH:MM A'
                            )}
                          </div>
                          <div>
                            <BsArrowRight />
                          </div>
                          <div>
                            {dayjs(segment.arriving_at).format(
                              ' DD MMM,HH:MM A'
                            )}
                          </div>
                        </div>
                        <div className="text-sm font-normal flex items-center text-neutral-500 mt-1">
                          {segment.operating_carrier?.name} <BsDot />
                          &nbsp;
                          <span className="font-medium">
                            {' '}
                            {segment.aircraft?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <div>
                        <div className="flex items-center text-sm gap-2 font-semibold text-neutral-700">
                          {segment.origin.iata_code && (
                            <span>{segment.origin.iata_code}</span>
                          )}
                          <BsArrowRight />
                          {segment.destination.iata_code && (
                            <span>{segment.destination.iata_code}</span>
                          )}
                        </div>
                        {segment.duration && (
                          <div className="mt-2 flex items-center text-sm font-semibold text-neutral-700">
                            <CiClock2 className="mr-1 text-current" />
                            <span>{formatDuration(segment.duration)}</span>
                          </div>
                        )}
                      </div>
                      <div className="font-semibold text-neutral-700 ml-20">
                        {segment.stops.length > 0 ? (
                          <div>
                            {segment.stops.map((stop) => {
                              return (
                                <div key={stop.id}>
                                  {formatDuration(stop.duration)} at{' '}
                                  {stop.airport.iata_code}
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          'Non-stop'
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pl-8">
                    <Timeline
                      className="antd-flight-timeline"
                      items={[
                        {
                          dot: (
                            <div className="flex border items-center justify-center flex-col gap-2 my-[-4px] rounded-full overflow-hidden h-8 w-8">
                              <div className="p-1.5">
                                <MdFlightTakeoff className="text-lg text-neutral-400" />
                              </div>
                            </div>
                          ),
                          children: (
                            <div className="min-h-20 text-sm">
                              <span className="text-sm">Depart form </span>
                              <br />
                              <div className="font-semibold text-sm text-neutral-600">
                                {segment.origin.name}({segment.origin.iata_code}
                                ), Terminal - {segment.origin_terminal}
                              </div>{' '}
                              <div>
                                on{' '}
                                <span className="font-semibold">
                                  {' '}
                                  {dayjs(segment.departing_at).format(
                                    'DD MMM,YYYY HH:MM A'
                                  )}
                                </span>
                              </div>
                              {stop && (
                                <div className="text-sm font-medium text-neutral-600 py-1 px-2">
                                  {formatDuration(stop.duration)}{' '}
                                  {segment.origin.name}(
                                  {segment.origin.iata_code})
                                </div>
                              )}
                            </div>
                          )
                        },

                        {
                          dot: (
                            <div className="flex border items-center justify-center flex-col gap-2 my-[-4px] rounded-full overflow-hidden h-8 w-8">
                              <div className="p-1.5">
                                <MdFlightLand className="text-lg text-neutral-400" />{' '}
                              </div>
                            </div>
                          ),
                          children: (
                            <div className="min-h-16 text-sm">
                              <span className="text-sm">Arrive at </span>
                              <br />
                              <div className="font-semibold text-sm text-neutral-600">
                                {segment.destination.name}(
                                {segment.destination.iata_code}
                                ), Terminal - {segment.destination_terminal}
                              </div>{' '}
                              <div>
                                on{' '}
                                <span className="font-semibold text-sm text-neutral-600">
                                  {' '}
                                  {dayjs(segment.arriving_at).format(
                                    'DD MMM,YYYY HH:MM A'
                                  )}
                                </span>
                              </div>
                              <div className="items-center text-neutral-600 mt-4 font-medium gap-2 text-sm inline-flex px-2 py-1">
                                <div className="mr-4">
                                  {
                                    segment.passengers[0]
                                      .cabin_class_marketing_name
                                  }
                                </div>
                                <div className="flex items-center gap-4">
                                  {segment.passengers[0].baggages.map(
                                    (node) => {
                                      return (
                                        <div
                                          key={node.type}
                                          className="flex items-center gap-1 capitalize font-medium"
                                        >
                                          <BsLuggage /> &nbsp;{node.quantity}
                                          &nbsp;
                                          {node.type.replaceAll('_', ' ')} bag
                                        </div>
                                      )
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        }
                      ]}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="font-semibold text-lg mt-6 py-2 text-neutral-700">
        Travelers details
      </div>
      <div>
        <Details passengers={order.passengers} />
      </div>
      <div className="font-semibold text-lg mt-6 py-2 text-neutral-700">
        Billing details
      </div>
      <div className="border rounded-md p-4">
        <div className="space-y-1 pb-4 pt-2">
          <div className="text-neutral-500 text-sm flex items-center justify-between">
            <div>Base Amount</div>
            <div>{formatCurrency(+order.base_amount, order.base_currency)}</div>
          </div>
          {order.tax_amount && (
            <div className="text-neutral-500 text-sm flex items-center justify-between">
              <div>Tax Amount</div>
              <div>
                {formatCurrency(+order.tax_amount, order.base_currency)}
              </div>
            </div>
          )}
        </div>
        <div className="text-neutral-600 font-semibold py-1 mb-[-1rem] pb-4 bg-primary-50 flex items-center justify-between">
          <div>Total</div>
          <div>{formatCurrency(+order.total_amount, order.total_currency)}</div>
        </div>
        <div className="text-neutral-600 font-semibold py-1 mt-6 pb-4 bg-primary-50 flex items-center justify-between">
          <div>Pay via</div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">
              {booking.paymentMethod?.label}
            </div>
            <div className="h-10 w-auto">
              <Image
                height={20}
                width={60}
                alt={booking.paymentMethod?.label || ''}
                src={booking.paymentMethod?.logo || ''}
                className="h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BookingDetails }
