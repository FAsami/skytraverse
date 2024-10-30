'use client'
import { MdMailOutline } from 'react-icons/md'
import { AuthForm, AuthPageTitle } from '../components'
import { ForgotPasswordSchema } from '../authSchema'
import { forgotPassword } from './forgotPassword'

const ForgotPasswordPage = () => {
  return (
    <div>
      <AuthPageTitle identifier="forgotPassword" />
      <AuthForm
        identifier="forgotPassword"
        onFormSubmit={forgotPassword}
        fields={[
          {
            type: 'phone',
            name: 'phone',
            label: 'Phone',
            placeholder: 'Enter your phone',
            initialValue: ''
          },
          {
            type: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            icon: <MdMailOutline />,
            initialValue: ''
          }
        ]}
        schema={ForgotPasswordSchema}
      />
    </div>
  )
}

export default ForgotPasswordPage
