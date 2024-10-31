import React from 'react'
import { Checkbox, Tabs } from 'antd'
import {
  ClockCircleOutlined,
  RiseOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons'
import { TimeFilter, TimePeriod } from '../filterUtils'

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
    timeRange: '5:00 AM - 11:59 AM'
  },
  {
    value: 'afternoon',
    label: 'Afternoon',
    icon: <SunOutlined />,
    timeRange: '12:00 PM - 4:59 PM'
  },
  {
    value: 'evening',
    label: 'Evening',
    icon: <ClockCircleOutlined />,
    timeRange: '5:00 PM - 8:59 PM'
  },
  {
    value: 'night',
    label: 'Night',
    icon: <MoonOutlined />,
    timeRange: '9:00 PM - 4:59 AM'
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
    <div className="space-y-2">
      {TIME_PERIODS.map((period) => (
        <div key={period.value} className="flex items-center">
          <Checkbox
            checked={value[type].includes(period.value)}
            onChange={() => handleTimeChange(type, period.value)}
          >
            <div className="flex items-center">
              <span className="mr-2">{period.icon}</span>
              <span>{period.label}</span>
              <span className="text-xs text-gray-500 ml-2">
                ({period.timeRange})
              </span>
            </div>
          </Checkbox>
        </div>
      ))}
    </div>
  )

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Flight Times</h3>
      <Tabs
        items={[
          {
            key: 'departure',
            label: 'Departure Time',
            children: <TimeSelector type="departure" />
          },
          {
            key: 'arrival',
            label: 'Arrival Time',
            children: <TimeSelector type="arrival" />
          }
        ]}
      />
    </div>
  )
}
export { FlightTimeFilter }
