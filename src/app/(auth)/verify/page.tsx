import { decrypt } from '@/app/utils/cryptography'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { BiSolidHome, BiSolidInfoCircle } from 'react-icons/bi'
import { CiMail } from 'react-icons/ci'
import VerifyOTPForm from './VerifyOTPForm'

const VerifyPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  if (!searchParams.token) {
    redirect('/login')
  }

  const token = decodeURIComponent(searchParams.token)

  let decoded
  try {
    decoded = (await decrypt(token)) as {
      phone: string
      email: string
      name: string
      scope: 'FORGOT_PASSWORD' | 'REGISTER'
    }
  } catch (error) {
    return (
      <div className="flex items-center flex-col gap-8 justify-center h-full px-14">
        <BiSolidInfoCircle className="text-red-500 text-5xl" />
        <div className="text-sm text-center text-neutral-700">
          Something went wrong. Please make sure you have access to this page.
        </div>
        <Link
          className="text-blue-600 flex items-center gap-1 text-sm"
          href="/"
        >
          <BiSolidHome /> Home
        </Link>
      </div>
    )
  }

  if (!decoded || (!decoded.email && !decoded.phone)) {
    return (
      <div className="flex items-center flex-col gap-8 justify-center h-full px-14">
        <BiSolidInfoCircle className="text-red-500 text-5xl" />
        <div className="text-sm text-center text-neutral-700">
          Something went wrong. Please make sure you have access to this page.
        </div>
        <Link
          className="text-blue-600 flex items-center gap-1 text-sm"
          href="/"
        >
          <BiSolidHome /> Home
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        Verify your {decoded.phone ? 'Phone number' : 'Email'}
      </h3>
      <div className="flex justify-center">
        <CiMail className="text-blue-400 text-7xl" />
      </div>

      <div className="text-sm py-6 text-neutral-700">
        A <span className="font-semibold">6 digit code</span> has been sent to{' '}
        <span className="text-blue-600 font-semibold">
          {decoded.phone ? decoded.phone : decoded.email}
        </span>{' '}
        <br />
        Please enter the code to verify your{' '}
        {decoded.phone ? 'Phone number' : 'Email'}
      </div>
      <VerifyOTPForm
        name={decoded.name || ''}
        phone={decoded.phone || ''}
        email={decoded.email || ''}
        scope={decoded.scope}
      />
    </div>
  )
}

export default VerifyPage
