import { AuthPageIdentifier } from '@/types/authForm'
import Link from 'next/link'
import { ReactNode } from 'react'

const AuthPageTitle = ({ identifier }: { identifier: AuthPageIdentifier }) => {
  return (
    <div className="mb-5">
      <h3 className="font-bold text-xl text-neutral-700 text-center">
        {details[identifier].title}
      </h3>
      <div className="text-xs text-gray-500 text-center mt-2">
        {details[identifier].subtitle}{' '}
        {details[identifier].link && (
          <Link
            href={details[identifier].link}
            className="text-blue-600 font-semibold"
          >
            {details[identifier].linkLabel}
          </Link>
        )}
      </div>
    </div>
  )
}

export { AuthPageTitle }

type PageDetail = {
  title: string
  subtitle: string | null | ReactNode
  link?: string
  linkLabel?: string
}

const details: Record<AuthPageIdentifier, PageDetail> = {
  login: {
    title: 'Login to your account',
    subtitle: `Don't have an account?`,
    link: '/register',
    linkLabel: 'Register'
  },
  register: {
    title: 'Create your account',
    subtitle: 'Already have an account?',
    link: '/login',
    linkLabel: 'Login'
  },
  forgotPassword: {
    title: 'Forgot Password',
    subtitle: null
  },
  setPassword: {
    title: 'Set Your Password',
    subtitle: null
  },
  verify: {
    title: 'Verify Your account',
    subtitle: null
  }
}
