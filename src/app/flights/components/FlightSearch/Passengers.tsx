import React, { useState } from 'react'
import { Button, Dropdown, MenuProps } from 'antd'
import { CreateOfferRequestPassenger, PassengerType } from '@duffel/api/types'
import { BiChevronDown, BiMinus, BiPlus } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'

interface PassengersProps {
  onPassengerChange: (passengers: CreateOfferRequestPassenger[]) => void
}

const Passengers: React.FC<PassengersProps> = ({ onPassengerChange }) => {
  const [passengerCounts, setPassengerCounts] = useState<
    Record<PassengerType, number>
  >({
    adult: 1,
    child: 0,
    infant_without_seat: 0
  })

  const [visible, setVisible] = useState(false)

  const totalPassengers =
    passengerCounts.adult +
    passengerCounts.child +
    passengerCounts.infant_without_seat

  const updatePassengerCounts = (type: PassengerType, change: number) => {
    const newCount = passengerCounts[type] + change
    if (newCount < 0) return
    if (change > 0 && totalPassengers >= 9) return

    setPassengerCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts, [type]: newCount }
      const newPassengers = [
        ...Array(updatedCounts.adult).fill({ type: 'adult' }),
        ...Array(updatedCounts.child).fill({ type: 'child' }),
        ...Array(updatedCounts.infant_without_seat).fill({
          type: 'infant_without_seat'
        })
      ]

      onPassengerChange(newPassengers)
      return updatedCounts
    })
  }

  const handleOkClick = () => {
    setVisible(false)
  }

  const createMenuItems = (): MenuProps['items'] => {
    const types: PassengerType[] = ['adult', 'child', 'infant_without_seat']

    const items: MenuProps['items'] = types.map((type) => ({
      key: type,
      label: (
        <div className="flex items-center justify-between">
          <span className="capitalize text-neutral-500 text-xs mr-3">
            {type === 'infant_without_seat'
              ? 'Infant (0-2)'
              : type.replace('_', ' ')}{' '}
            {type === 'adult' ? '(18+)' : type === 'child' ? '(2-12)' : ''}
          </span>
          <div className="flex items-center gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                updatePassengerCounts(type, -1)
              }}
              disabled={passengerCounts[type] === 0}
              size="small"
              shape="circle"
              type="text"
              className="min-w-8"
            >
              <BiMinus />
            </Button>
            <div className="min-w-5 font-semibold">{passengerCounts[type]}</div>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                updatePassengerCounts(type, 1)
              }}
              size="small"
              shape="circle"
              disabled={passengerCounts[type] === 9 || totalPassengers >= 9}
              type="text"
              className="min-w-8"
            >
              <BiPlus />
            </Button>
          </div>
        </div>
      )
    }))

    items.push({ type: 'divider' })
    items.push({
      key: 'ok-button',
      label: (
        <Button type="primary" block onClick={handleOkClick}>
          Okay
        </Button>
      )
    })

    return items
  }

  return (
    <div className="flex items-center">
      <Dropdown
        menu={{ items: createMenuItems() }}
        trigger={['click']}
        open={visible}
        onOpenChange={setVisible}
        className="border-none"
      >
        <button className="flex items-center text-neutral-700 font-semibold text-xs gap-1 md:text-sm md:gap-2">
          <BsPeopleFill />
          <span>
            {totalPassengers}&nbsp;
            <span className="hidden md:inline">Traveller</span>
            <span className="hidden md:inlint">
              {totalPassengers !== 1 ? 's' : ''}
            </span>
          </span>
          <BiChevronDown className="ml-2 text-neutral-400 text-lg md:text-2xl" />
        </button>
      </Dropdown>
    </div>
  )
}

export { Passengers }
