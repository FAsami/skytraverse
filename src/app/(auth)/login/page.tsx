import { signIn } from '@/auth'

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
      <button type="submit">Signin with Google</button>
    </form>
  )
}
