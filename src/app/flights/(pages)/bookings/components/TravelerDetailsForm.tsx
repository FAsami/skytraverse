/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  Button,
  Checkbox
} from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { FormItemProps, Rule } from 'antd/es/form'
import { OfferPassenger } from '@duffel/api/types'
import { forEach, get } from 'lodash'
import { PhoneInput } from '@/app/(auth)/components/PhoneInput'
import { CountrySelector } from '@/app/components/CountrySelect'
import { FaBook } from 'react-icons/fa'
import clsx from 'clsx'

const { Option } = Select

export type FormField = {
  name: string
  label: string
  type: 'text' | 'number' | 'select' | 'date' | 'radio' | 'country' | 'phone'
  rules: Rule[]
  options?: {
    value: string
    label: string
  }[]
  fullWidth?: boolean
  order?: number
  defaultValue?: any
} & FormItemProps

interface FormValues {
  [key: string]: any
}

const TravelerDetailsForm: React.FC<{
  fieldsData: {
    title: string
    passenger: OfferPassenger | null
    data: FormField[]
  }[]
  loading: boolean

  onFinish: (values: FormValues[]) => void
}> = ({ fieldsData, onFinish, loading }) => {
  const [form] = Form.useForm()

  const handleFinish = (values: FormValues) => {
    const passengersIds: string[] = []
    const contact: any = {}
    forEach(values, (val, key) => {
      if (key.includes('passengerId_')) {
        passengersIds.push(val)
      } else if (key.includes('contact')) {
        const fieldName = key.split('_')[0]
        contact[`${fieldName}`] = val
      }
    })
    const passengers = passengersIds.map((id) => {
      return {
        title: get(values, `title_${id}`),
        phone_number: contact.phone,
        identity_documents: [
          {
            unique_identifier: get(values, `passport_number_${id}`),
            type: 'passport',
            issuing_country_code: get(
              values,
              `passport_unique_issuing_country_code_${id}`
            ),
            ...(get(values, `passport_expires_on_${id}`) && {
              expires_on: dayjs(
                get(values, `passport_expires_on_${id}`)
              ).format('YYYY-MM-DD')
            })
          }
        ],
        id,
        given_name: get(values, `given_name_${id}`),
        gender: get(values, `gender_${id}`),
        family_name: get(values, `family_name_${id}`),
        email: contact.email,
        born_on: dayjs(get(values, `born_on_${id}`)).format('YYYY-MM-DD')
      }
    })

    onFinish(passengers)
  }

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      scrollToFirstError={{ behavior: 'smooth' }}
    >
      {fieldsData.map((fields, passengerIndex) => {
        if (fields)
          return (
            <div
              key={passengerIndex}
              className="shadow-sm rounded bg-white p-6 mb-3"
            >
              <h3 className="text-base font-medium mb-4 inline-block">
                {fields.title}
              </h3>
              {fields.passenger?.id && (
                <Form.Item
                  name={`passengerId_${fields.passenger?.id}`}
                  initialValue={fields.passenger?.id}
                  hidden
                >
                  <Input type="hidden" />
                </Form.Item>
              )}
              <div className="flex flex-wrap gap-x-4">
                {fields.data.map((field) => {
                  const suffix =
                    fields.passenger?.id || fields.title.toLowerCase()
                  return (
                    <Form.Item
                      key={`${field.name}_${suffix}`}
                      name={`${field.name}_${suffix}`}
                      label={field.label}
                      rules={field.rules}
                      initialValue={field.defaultValue}
                      className={clsx(
                        { 'w-full': field.fullWidth },
                        'w-full md:w-[calc(50%-8px)]'
                      )}
                    >
                      {(() => {
                        switch (field.type) {
                          case 'text':
                            return (
                              <Input placeholder={`Enter ${field.label}`} />
                            )
                          case 'number':
                            return (
                              <InputNumber
                                placeholder={`Enter ${field.label}`}
                                style={{ width: '100%' }}
                              />
                            )
                          case 'select':
                            return (
                              <Select
                                placeholder={`Select ${field.label}`}
                                style={{ width: '100%' }}
                              >
                                {field.options?.map((option) => (
                                  <Option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </Option>
                                ))}
                              </Select>
                            )
                          case 'date':
                            return (
                              <DatePicker
                                style={{ width: '100%' }}
                                placeholder={`Select ${field.label}`}
                                defaultPickerValue={
                                  dayjs().subtract(20, 'year') as Dayjs
                                }
                              />
                            )
                          case 'radio':
                            return (
                              <Radio.Group buttonStyle="solid">
                                {field.options?.map((option) => (
                                  <Radio.Button
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </Radio.Button>
                                ))}
                              </Radio.Group>
                            )
                          case 'country':
                            return (
                              <Form.Item
                                name={`${field.name}_${suffix}`}
                                noStyle
                                getValueFromEvent={(value) => value}
                              >
                                <CountrySelector
                                  defaultValue={field.defaultValue}
                                />
                              </Form.Item>
                            )
                          case 'phone':
                            return (
                              <PhoneInput
                                value={form.getFieldValue(
                                  `${field.name}_${suffix}`
                                )}
                                onChange={(value) =>
                                  form.setFieldsValue({
                                    [`${field.name}_${suffix}`]: value
                                  })
                                }
                              />
                            )
                          default:
                            return null
                        }
                      })()}
                    </Form.Item>
                  )
                })}
              </div>
            </div>
          )
      })}

      <div className="w-full px-3 h-full shadow py-8 rounded flex-col bg-white flex items-center justify-center">
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('You must accept the terms and conditions')
            }
          ]}
        >
          <Checkbox>
            <span className="text-neutral-500">
              I have read and agree to the{' '}
              <a className="underline" href="/terms">
                terms and conditions
              </a>
              .
            </span>
          </Checkbox>
        </Form.Item>
        <Form.Item className="flex justify-center !mb-0">
          <Button
            type="primary"
            size="large"
            shape="round"
            htmlType="submit"
            icon={<FaBook />}
            loading={loading}
          >
            Book flight
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export { TravelerDetailsForm }
