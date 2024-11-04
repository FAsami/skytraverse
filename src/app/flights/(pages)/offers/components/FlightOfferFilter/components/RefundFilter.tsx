import React from 'react'
import { BsCheckCircle, BsHourglass, BsXCircle } from 'react-icons/bs'
import { RefundFilterType } from '../filters'
import clsx from 'clsx'

interface RefundFilterProps {
  selectedRefundTypes: Array<{ type: RefundFilterType }>
  onChange: (refundTypes: Array<{ type: RefundFilterType }>) => void
}

export const RefundFilter: React.FC<RefundFilterProps> = ({
  selectedRefundTypes,
  onChange
}) => {
  return (
    <div className="border border-neutral-100 p-2 rounded-md">
      <div className="flex items-center justify-between border-b border-b-neutral-100 mb-2">
        <div className="flex items-center">
          <h3 className="text-neutral-600 text-sm font-semibold mb-2 mr-2">
            Refund
          </h3>
        </div>
      </div>
      <div className="flex gap-1">
        {[
          {
            type: 'Full',
            icon: <BsCheckCircle className="text-green-500" />
          },
          {
            type: 'Partial',
            icon: <BsHourglass className="text-yellow-500" />
          },
          {
            type: 'N/A',
            icon: <BsXCircle className="text-red-500" />
          }
        ].map(({ type, icon }) => (
          <div
            key={type}
            className={clsx(
              'flex px-3 py-2 w-auto gap-2 bg-neutral-50 items-center justify-center cursor-pointer border rounded hover:bg-gray-100',
              {
                'border-blue-500 bg-blue-100':
                  selectedRefundTypes.length === 1 &&
                  selectedRefundTypes[0].type === type,
                'border-neutral-300':
                  selectedRefundTypes.length !== 1 ||
                  selectedRefundTypes[0].type !== type
              }
            )}
            onClick={() => {
              const newRefundTypes =
                selectedRefundTypes[0]?.type === type
                  ? []
                  : [{ type: type as RefundFilterType }]
              onChange(newRefundTypes)
            }}
          >
            <div className="flex items-center justify-center">
              {selectedRefundTypes.length === 1 &&
              selectedRefundTypes[0].type === type ? (
                icon
              ) : (
                <span className="text-gray-500 text-sm">{icon}</span>
              )}
            </div>
            <span className="text-xs font-semibold text-neutral-700">
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
