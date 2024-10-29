'use client'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { AuthForm, AuthPageTitle } from '../components'
import { RegisterSchema } from '../authSchema'
import { registerUser } from './registerUser'

const RegisterPage = () => {
  return (
    <div>
      <AuthPageTitle identifier="register" />
      <AuthForm
        identifier="register"
        onFormSubmit={registerUser}
        fields={[
          {
            type: 'text',
            name: 'firstName',
            label: 'First name',
            placeholder: 'Enter your first name',
            initialValue: ''
          },

          {
            type: 'text',
            name: 'lastName',
            label: 'Last name',
            placeholder: 'Enter your last name',
            initialValue: ''
          },
          {
            type: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            icon: <MailOutlined />,
            initialValue: ''
          },
          {
            type: 'phone',
            name: 'phone',
            label: 'Phone',
            placeholder: 'Enter your phone',
            initialValue: ''
          },
          {
            type: 'password',
            name: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            icon: <LockOutlined />,
            initialValue: ''
          }
        ]}
        schema={RegisterSchema}
      />
    </div>
  )
}

export default RegisterPage
