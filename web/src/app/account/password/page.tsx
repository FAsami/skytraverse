'use client'
import { ChangePasswordSchema } from '@/app/(auth)/authSchema'
import { AuthForm } from '@/app/(auth)/components/AuthForm'
import { LockOutlined } from '@ant-design/icons'
import { changePassword } from '../actions/changePassword'

const UpdatePassword = () => {
  return (
    <div>
      <div className="text-2xl px-4 font-semibold flex gap-2 items-center border-b pb-4">
        Update password
      </div>
      <div className="max-w-md px-12 md:px-5 pt-12 md:py-3">
        <AuthForm
          onFormSubmit={changePassword}
          fields={[
            {
              type: 'password',
              name: 'oldPassword',
              label: 'Old Password',
              placeholder: 'Enter your old password',
              icon: <LockOutlined />,
              initialValue: ''
            },
            {
              type: 'password',
              name: 'password',
              label: 'New Password',
              placeholder: 'Enter your password',
              icon: <LockOutlined />,
              initialValue: ''
            },
            {
              type: 'password',
              name: 'confirmPassword',
              label: 'Confirm Password',
              placeholder: 'Enter your password',
              icon: <LockOutlined />,
              initialValue: ''
            }
          ]}
          schema={ChangePasswordSchema}
          identifier="changePassword"
        />
      </div>
    </div>
  )
}

export default UpdatePassword
