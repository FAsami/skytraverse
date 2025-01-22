'use client'
import { LockOutlined } from '@ant-design/icons'
import { AuthForm } from '../components/AuthForm'
import { AuthPageTitle } from '../components/AuthPageTitle'
import { ResetPasswordSchema } from '../authSchema'
import { resetPassword } from '../actions/resetPassword'
import { useSearchParams } from 'next/navigation'

const SetPasswordPage = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  return (
    <div>
      <AuthPageTitle identifier="setPassword" />
      <AuthForm
        identifier="setPassword"
        fields={[
          {
            type: 'password',
            name: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            icon: <LockOutlined />,
            initialValue: ''
          },
          {
            type: 'password',
            name: 'confirmPassword',
            label: 'Confirm password',
            placeholder: 'Confirm your password',
            icon: <LockOutlined />,
            initialValue: ''
          },
          {
            type: 'text',
            name: 'token',
            label: 'Token',
            placeholder: 'Token',
            icon: <LockOutlined />,
            initialValue: token,
            hidden: true
          }
        ]}
        schema={ResetPasswordSchema}
        onFormSubmit={resetPassword}
      />
    </div>
  )
}

export default SetPasswordPage
