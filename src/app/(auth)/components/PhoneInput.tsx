import React, { useState, useMemo } from 'react'
import { Select, Input } from 'antd'
import {
  getCountries,
  getCountryCallingCode,
  AsYouType,
  CountryCode
} from 'libphonenumber-js'
import Image from 'next/image'

const { Option } = Select

interface CountryOption {
  value: CountryCode
  flag: React.ReactNode
  phone: string
  label: React.ReactNode
}

interface PhoneInputProps {
  value?: string
  onChange?: (value: string) => void
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>('BD')
  const [phoneNumber, setPhoneNumber] = useState<string>(value || '')

  const countryOptions: CountryOption[] = useMemo(
    () =>
      getCountries().map((country) => ({
        value: country,
        flag: (
          <Image
            src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
            alt={`${country} flag`}
            className="mr-2 h-4 w-6 object-contain"
            height={16}
            width={24}
          />
        ),
        label: (
          <div className="flex items-center">
            <Image
              src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
              alt={`${country} flag`}
              className="mr-2 h-4 w-6 object-contain"
              height={16}
              width={24}
            />
            <span>
              {new Intl.DisplayNames(['en'], { type: 'region' }).of(country)}
            </span>
          </div>
        ),
        phone: getCountryCallingCode(country)
      })),
    []
  )

  const handleCountryChange = (value: CountryCode) => {
    setSelectedCountry(value)
    setPhoneNumber('')
    onChange && onChange(`+${getCountryCallingCode(value)}`)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatter = new AsYouType(selectedCountry)
    const formattedPhone = formatter.input(e.target.value)
    setPhoneNumber(formattedPhone)
    onChange &&
      onChange(`+${getCountryCallingCode(selectedCountry)} ${formattedPhone}`)
  }

  return (
    <div className="flex items-center space-x-0.5">
      <Select<CountryCode>
        style={{ width: 80 }}
        value={selectedCountry}
        onChange={handleCountryChange}
        optionLabelProp="label"
        dropdownStyle={{ width: 250 }}
      >
        {countryOptions.map((option) => (
          <Option key={option.value} value={option.value} label={option.flag}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Input
        addonBefore={`+${getCountryCallingCode(selectedCountry)}`}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Enter phone number"
        className="flex-grow"
      />
    </div>
  )
}

export { PhoneInput }
