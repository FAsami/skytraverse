import { apolloClient } from '../lib'
import { GET_BRAND_INFO } from '../graphql/query'
import { GetBrandQuery } from '@/types/gql/graphql'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { login } from './actions/login'

const AuthLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const {
    brand: [brand]
  } = await apolloClient.request<GetBrandQuery>(GET_BRAND_INFO, {
    title: process.env.BRAND_TITLE
  })

  return (
    <div className="max-w-lg px-12 py-4 pb-8 rounded-md bg-white mx-auto mt-4">
      <div className="flex flex-col items-center justify-center">
        <div className="h-20 w-20">
          <Image
            alt={brand?.title || 'Brand name'}
            height={400}
            width={400}
            className="h-full w-full"
            src={brand?.logo.default}
          />
        </div>
      </div>
      <div>{children}</div>
      <div className="flex items-center gap-4 text-gray-300 my-8 px-8 text-sm">
        <div className="w-full h-[1px] bg-neutral-200"></div>
        <span className="text-blue-500 text-xs whitespace-nowrap">
          or Sign in with{' '}
        </span>
        <div className="w-full h-[1px] bg-neutral-200"></div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <form action={login}>
          <input type="hidden" name="provider" value="google" />
          <input type="hidden" name="callbackUrl" value="/" />
          <button type="submit">
            <FcGoogle className="text-2xl" />
          </button>
        </form>
      </div>
      <div className="text-xs text-center text-neutral-400 py-4 max-w-sm mx-auto">
        This site is protected by reCAPTCHA and the Google{' '}
        <a className="text-blue-500" href="https://policies.google.com/privacy">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a className="text-blue-500" href="https://policies.google.com/terms">
          Terms of Service
        </a>{' '}
        apply.
      </div>
    </div>
  )
}

export default AuthLayout
