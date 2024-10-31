import React from 'react'
import { Tabs } from 'antd'
import {
  ClockCircleOutlined,
  RiseOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons'
import { TimeFilter, TimePeriod } from '../filters'
import { MdFlightTakeoff, MdOutlineFlightLand } from 'react-icons/md'

const TIME_PERIODS: Array<{
  value: TimePeriod
  label: string
  icon: React.ReactNode
  timeRange: string
}> = [
  {
    value: 'morning',
    label: 'Morning',
    icon: <RiseOutlined />,
    timeRange: '05:00 - 11:59'
  },
  {
    value: 'afternoon',
    label: 'Afternoon',
    icon: <SunOutlined />,
    timeRange: '12:00 - 16:59'
  },
  {
    value: 'evening',
    label: 'Evening',
    icon: <ClockCircleOutlined />,
    timeRange: '17:00 - 20:59'
  },
  {
    value: 'night',
    label: 'Night',
    icon: <MoonOutlined />,
    timeRange: '21:00 - 04:59'
  }
]

interface TimeFilterProps {
  value: TimeFilter
  onChange: (value: TimeFilter) => void
}

const FlightTimeFilter: React.FC<TimeFilterProps> = ({ value, onChange }) => {
  const handleTimeChange = (
    type: 'departure' | 'arrival',
    period: TimePeriod
  ) => {
    const currentPeriods = value[type]
    const newPeriods = currentPeriods.includes(period)
      ? currentPeriods.filter((p) => p !== period)
      : [...currentPeriods, period]

    onChange({
      ...value,
      [type]: newPeriods
    })
  }

  const TimeSelector = ({ type }: { type: 'departure' | 'arrival' }) => (
    <div className="grid grid-cols-4 gap-1">
      {TIME_PERIODS.map((period) => (
        <div
          key={period.value}
          onClick={() => handleTimeChange(type, period.value)}
          className={`
            cursor-pointer p-1.5 rounded border transition-all
            ${
              value[type].includes(period.value)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200 bg-neutral-50'
            }
          `}
        >
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xl">{period.icon}</span>
              <span className="text-xs font-semibold">{period.label}</span>
            </div>
            <span className="text-[10px] text-gray-500">
              {period.timeRange}
            </span>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="border-neutral-100 pb-4 px-2 rounded-md border">
      <Tabs
        items={[
          {
            key: 'departure',
            label: (
              <span className="flex items-center gap-2 text-sm font-medium">
                <MdFlightTakeoff /> Departure Time
              </span>
            ),
            children: <TimeSelector type="departure" />
          },
          {
            key: 'arrival',
            label: (
              <span className="flex items-center gap-1 text-sm font-medium">
                <MdOutlineFlightLand /> Arrival Time
              </span>
            ),
            children: <TimeSelector type="arrival" />
          }
        ]}
      />
    </div>
  )
}
export { FlightTimeFilter }
