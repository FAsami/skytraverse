import React from 'react'
import { Checkbox } from 'antd'

interface StopsFilterProps {
  selectedStops: number[]
  onChange: (stops: number[]) => void
}

export const StopsFilter: React.FC<StopsFilterProps> = ({
  selectedStops,
  onChange
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Stops</h3>
      {[0, 1, 2].map((stop) => (
        <Checkbox
          key={stop}
          checked={selectedStops.includes(stop)}
          onChange={(e) => {
            const newStops = e.target.checked
              ? [...selectedStops, stop]
              : selectedStops.filter((s) => s !== stop)
            onChange(newStops)
          }}
        >
          {stop === 0 ? 'Non-stop' : `${stop} stop${stop > 1 ? 's' : ''}`}
        </Checkbox>
      ))}
    </div>
  )
}
