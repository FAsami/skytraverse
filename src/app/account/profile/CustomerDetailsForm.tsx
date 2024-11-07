'use client'
import {
  FormBuilder,
  FormField,
  FormValues
} from '@/app/components/FormBuilder'
import { Store } from 'antd/es/form/interface'
import { updateCustomerDetails } from '../actions/updateCutomerDetails'
import { Modal } from 'antd'
import { IoIosClose } from 'react-icons/io'
import Image from 'next/image'
import { useTransition } from 'react'
import { useReCaptcha } from '@/app/hooks'
import { BiSolidError } from 'react-icons/bi'
import {
  CreateCustomerDetailsMutationVariables,
  UpdateCustomerDetailsMutationVariables
} from '@/types/gql/graphql'
import dayjs from 'dayjs'
import { FaCheckCircle } from 'react-icons/fa'

const CustomerDetailsForm = ({ initialValues }: { initialValues: Store }) => {
  const [isPending, startTransition] = useTransition()
  const { verifyReCaptcha } = useReCaptcha()

  const formattedInitialValues = Object.fromEntries(
    Object.entries(initialValues).map(([key, value]) => [
      key,
      key.includes('dateOf') && value ? dayjs(value) : value
    ])
  )
  const handleUpdateCustomer = (val: FormValues) => {
    const customerDetails:
      | CreateCustomerDetailsMutationVariables['object']
      | UpdateCustomerDetailsMutationVariables['_set'] = {
      ...(val.firstName && { firstName: val.firstName }),
      ...(val.lastName && { lastName: val.lastName }),
      ...(val.gender && { gender: val.gender }),
      ...(val.dateOfBirth
        ? { dateOfBirth: dayjs(val.dateOfBirth).format('YYYY-MM-DD') }
        : {}),
      ...(val.avatar?.[0]?.url && { avatar: val.avatar?.[0]?.url })
    }

    try {
      startTransition(async () => {
        const isValid = await verifyReCaptcha('updateCustomerDetails')
        if (isValid) {
          const result = await updateCustomerDetails(customerDetails)
          if (result.success) {
            Modal.warn({
              title: null,
              icon: null,
              centered: true,
              content: (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="mb-4">
                    <FaCheckCircle className="text-6xl text-green-500" />
                  </div>
                  <p className="text-lg text-center text-neutral-600 font-semibold">
                    Updated successfully
                  </p>
                </div>
              ),
              closeIcon: <IoIosClose className="text-neutral-600 text-2xl" />,
              footer: null,
              closable: true,
              onClose: Modal.destroyAll
            })
          }
          if (result?.success === false) {
            Modal.warn({
              title: null,
              icon: null,
              centered: true,
              content: (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="mb-4">
                    <Image
                      alt="Error"
                      height={150}
                      width={150}
                      src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730562569/server_error_w0x6oq.svg"
                    />
                  </div>
                  <p className="text-xl text-red-600 font-semibold">
                    Failed to book your flight
                  </p>
                  <p className="text-ms px-12 mt-2 text-neutral-500 text-center">
                    {result?.message || 'Something went wrong!'}
                  </p>
                </div>
              ),
              closeIcon: <IoIosClose className="text-neutral-600 text-2xl" />,
              footer: null,
              closable: true,
              onClose: Modal.destroyAll
            })
          }
        } else {
          Modal.warn({
            title: null,
            icon: null,
            content: (
              <div className="flex flex-col items-center justify-center py-12">
                <BiSolidError className="text-red-500 text-6xl mb-2" />
                <p className="text-xl text-neutral-600 font-semibold">
                  Something went wrong!
                </p>
                <p className="text-ms px-12 mt-2 text-neutral-500 text-center">
                  Please try again
                </p>
              </div>
            ),
            footer: null,
            closable: false
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormBuilder
      loading={isPending}
      title="Update Profile"
      fieldsData={formData}
      initialValue={formattedInitialValues}
      onUpdate={handleUpdateCustomer}
    />
  )
}

export { CustomerDetailsForm }

const formData: FormField[] = [
  {
    name: 'avatar',
    label: 'Profile Image',
    type: 'assets',
    rules: [{ required: false, message: 'Please upload your profile image!' }],
    fullWidth: true,
    order: 1
  },

  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',

    rules: [{ required: true, message: 'Please input your first name!' }],
    fullWidth: false,
    order: 2
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',

    rules: [{ required: true, message: 'Please input your last name!' }],
    fullWidth: false,
    order: 3
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    rules: [{ required: true, message: 'Please select your date of birth!' }],
    fullWidth: false,
    order: 4
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ],
    rules: [{ required: true, message: 'Please select your gender!' }],
    fullWidth: false,
    order: 5
  }
]
