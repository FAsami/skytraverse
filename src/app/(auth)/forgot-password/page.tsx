'use client'
import { MdMailOutline } from 'react-icons/md'
import { SendOTPSchema } from '../authSchema'
import { sendOTP } from '../actions/sendOTP'
import { AuthForm } from '../components/AuthForm'
import { AuthPageTitle } from '../components/AuthPageTitle'

const ForgotPasswordPage = () => {
  return (
    <div>
      <AuthPageTitle identifier="forgotPassword" />
      <AuthForm
        identifier="forgotPassword"
        onFormSubmit={sendOTP}
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
        schema={SendOTPSchema}
      />
    </div>
  )
}

export default ForgotPasswordPage
