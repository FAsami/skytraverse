import { signIn } from '@/auth'
import { Button } from 'antd'

const LoginPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  )
}

export default LoginPage

function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('email_password', {
          email: 'foysal.developer@gmail.com',
          password: '12345678',
          redirect: false
        })
      }}
    >
      <Button>Signin with Google</Button>
    </form>
  )
}
