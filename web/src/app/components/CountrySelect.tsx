import React, { useMemo } from 'react'
import { Select } from 'antd'
import getCountries from 'react-select-country-list'
import { FaRegSadCry } from 'react-icons/fa'
import Image from 'next/image'

interface CountrySelectorProps {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  defaultValue = 'BD',
  value,
  onChange
}) => {
  const countries = getCountries().getData()

  const options = useMemo(() => {
    return countries.map((country) => ({
      value: country.value,
      label: (
        <div className="flex items-center">
          <Image
            src={`https://flagcdn.com/w20/${country.value.toLowerCase()}.png`}
            alt={country.label}
            className="inline-block w-auto h-3 mr-2"
            height={16}
            width={16}
          />
          {country.label}
        </div>
      )
    }))
  }, [countries])

  return (
    <Select
      placeholder="Select a country"
      onChange={onChange}
      showSearch
      value={value}
      className="w-full"
      defaultValue={defaultValue}
      options={options}
      filterOption={(input, option) =>
        option?.label?.props?.children[1]
          ?.toLowerCase()
          .includes(input.toLowerCase())
      }
      notFoundContent={
        <div className="flex items-center justify-center text-gray-500">
          <FaRegSadCry className="mr-2" />
          No countries available
        </div>
      }
    />
  )
}

export { CountrySelector }
