'use client'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { LoginSchema } from '../authSchema'
import { AuthForm } from '../components/AuthForm'
import { AuthPageTitle } from '../components/AuthPageTitle'
import { loginUser } from '../actions/loginUser'

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
