'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Radio,
  UploadFile
} from 'antd'
import { FileUploader } from './FileUploader'
import clsx from 'clsx'
import { PhoneInput } from '@/app/(auth)/components/PhoneInput'
import { Store } from 'antd/es/form/interface'
const { Option } = Select
import dayjs from 'dayjs'

export type FormField = {
  name: string
  label: string
  type:
    | 'text'
    | 'number'
    | 'select'
    | 'date'
    | 'image'
    | 'video'
    | 'radio'
    | 'assets'
    | 'phone'
  rules: { required: boolean; message: string }[]
  options?: { value: string; label: string }[]
  fullWidth?: boolean
  order?: number
  disabled?: boolean
}

export interface FormValues {
  [key: string]: any
}

type AssetsState = {
  [fieldName: string]: UploadFile[]
}

const FormBuilder: React.FC<{
  title: string
  loading: boolean
  fieldsData: FormField[]
  initialValue?: Store
  onUpdate: (val: any) => void
  designOptions?: {
    saveButtonPosition?: 'right' | 'bottom'
  }
}> = ({
  title,
  loading,
  fieldsData,
  initialValue,
  onUpdate,
  designOptions = { saveButtonPosition: 'right' }
}) => {
  console.log(initialValue)
  const [form] = Form.useForm()
  const [assets, setAssets] = useState<AssetsState>({})

  const sortedFields = [...fieldsData].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  )

  const handleSetAssets = (fieldName: string, files: UploadFile[]) => {
    setAssets((prevAssets) => ({
      ...prevAssets,
      [fieldName]: files
    }))
  }

  const handleSubmit = (values: FormValues) => {
    if (onUpdate)
      onUpdate({
        ...values,
        ...Object.keys(assets).reduce((acc, key) => {
          acc[key] = assets[key]
          return acc
        }, {} as FormValues)
      })
  }
  return (
    <Form
      form={form}
      initialValues={initialValue}
      onFinish={handleSubmit}
      layout="vertical"
    >
      <div className="flex justify-between border-b pb-5">
        <div className="text-2xl px-4 font-semibold flex gap-2 items-center">
          {title}
        </div>
        {designOptions.saveButtonPosition === 'right' && (
          <Form.Item className="!mb-1">
            <Button
              loading={loading}
              type="primary"
              size="large"
              htmlType="submit"
              shape="round"
            >
              Update
            </Button>
          </Form.Item>
        )}
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)] px-3 md:px-16 pt-8 md:pt-4">
        <div className="flex flex-wrap gap-x-3">
          {sortedFields.map((field) => {
            const fieldWidthClass = field.fullWidth
              ? 'w-full'
              : 'w-full md:!w-[calc(50%-1rem)]'

            return (
              <Form.Item
                key={field.name}
                name={field.name}
                label={field.label}
                rules={field.rules}
                className={clsx(fieldWidthClass, 'md:px-3')}
              >
                {field.type === 'text' && (
                  <Input
                    disabled={field.disabled}
                    placeholder={`Enter ${field.label}`}
                  />
                )}
                {field.type === 'number' && (
                  <InputNumber
                    placeholder={`Enter ${field.label}`}
                    style={{ width: '100%' }}
                    disabled={field.disabled}
                  />
                )}
                {field.type === 'select' && (
                  <Select
                    disabled={field.disabled}
                    placeholder={`Select ${field.label}`}
                  >
                    {field.options?.map((option) => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                )}
                {field.type === 'date' && (
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder={`Select ${field.label}`}
                    disabled={field.disabled}
                    format="YYYY-MM-DD"
                  />
                )}
                {field.type === 'radio' && (
                  <Radio.Group disabled={field.disabled} buttonStyle="solid">
                    {field.options?.map((option) => (
                      <Radio.Button key={option.value} value={option.value}>
                        {option.label}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                )}
                {field.type === 'assets' && (
                  <FileUploader
                    onUploadComplete={(val) => handleSetAssets(field.name, val)}
                  />
                )}
                {field.type === 'phone' && (
                  <PhoneInput
                    value={form.getFieldValue(`${field.name}`)}
                    onChange={(value) =>
                      form.setFieldsValue({
                        [`${field.name}`]: value
                      })
                    }
                  />
                )}
              </Form.Item>
            )
          })}
        </div>
        {designOptions.saveButtonPosition === 'bottom' && (
          <Form.Item className="!mb-1">
            <Button
              loading={loading}
              type="primary"
              size="large"
              htmlType="submit"
              shape="round"
            >
              Update
            </Button>
          </Form.Item>
        )}
      </div>
    </Form>
  )
}

export { FormBuilder }
