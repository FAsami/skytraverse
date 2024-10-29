'use client'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { AuthForm } from '../components'
import { LoginSchema } from '../authSchema'
import { AuthPageTitle } from '../components'
import { loginUser } from './loginUser'

const LoginPage = () => {
  return (
    <div>
      <AuthPageTitle identifier="login" />
      <AuthForm
        onFormSubmit={loginUser}
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
            icon: <MailOutlined />,
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
        schema={LoginSchema}
        identifier="login"
      />
    </div>
  )
}

export default LoginPage
