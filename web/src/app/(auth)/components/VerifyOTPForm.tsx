'use client'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { AuthForm } from './AuthForm'
import { VerifyOTPSchema } from '../authSchema'
import { verifyOTP } from '../actions/verifyOTP'
import { useEffect, useState, useTransition } from 'react'
import { AuthResponse } from '@/types/authForm'
import { useReCaptcha } from '@/app/hooks'
import { Spinner } from '@/app/components/Spinner'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import { CSSTransition } from 'react-transition-group'
import { sendOTP } from '../actions/sendOTP'
const initial = {
  message: '',
  error: '',
  success: false
}

const VerifyOTPForm = ({
  phone,
  email
}: {
  phone: string
  email: string
  name: string
  scope: 'FORGOT_PASSWORD' | 'REGISTER'
}) => {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<AuthResponse>()
  const { verifyReCaptcha } = useReCaptcha()

  const handleResendOTP = async () => {
    setResult(initial)
    if (phone || email) {
      startTransition(async () => {
        const isVerified = await verifyReCaptcha('resendOtp')

        if (isVerified) {
          const resendResult = await sendOTP({ email, phone })
          if (resendResult) {
            setResult(resendResult)
          }
        }
      })
    }
  }
  useEffect(() => {
    if (result?.message || result?.error) {
      const timer = setTimeout(() => {
        setResult(initial)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [result])

  return (
    <AuthForm
      identifier="verify"
      onFormSubmit={verifyOTP}
      fields={[
        {
          type: 'email',
          name: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
          icon: <MailOutlined />,
          initialValue: email ? email : '',
          hidden: true
        },
        {
          type: 'phone',
          name: 'phone',
          label: 'Phone',
          placeholder: 'Enter your phone',
          initialValue: phone ? phone : '',
          hidden: true
        },
        {
          type: 'text',
          name: 'otp',
          label: 'Enter your OTP',
          placeholder: '6 digit OTP',
          icon: <LockOutlined />,
          initialValue: ''
        }
      ]}
      resendButton={
        <div className="mt-[-4px]">
          <button
            className="text-xs text-blue-500 text-right flex items-center justify-end pb-3 gap-2 disabled:text-neutral-600"
            onClick={handleResendOTP}
            disabled={isPending}
          >
            {isPending ? 'Resending' : 'Resend'} OTP {isPending && <Spinner />}
          </button>
          <CSSTransition
            in={Boolean(result?.error)}
            timeout={300}
            classNames={{
              enter: 'animate__animated animate__fadeIn',
              exit: 'animate__animated animate__fadeOut'
            }}
            unmountOnExit
          >
            <div className="text-red-400 text-sm mb-3 flex items-center gap-1">
              <BiErrorCircle />
              <div>{result?.error}</div>
            </div>
          </CSSTransition>

          <CSSTransition
            in={Boolean(result?.success)}
            timeout={300}
            classNames={{
              enter: 'animate__animated animate__fadeIn',
              exit: 'animate__animated animate__fadeOut'
            }}
            unmountOnExit
          >
            <div className="text-green-400 text-sm mb-3 flex items-center gap-1">
              <BiCheckCircle />
              <div>{result?.message}</div>
            </div>
          </CSSTransition>
        </div>
      }
      schema={VerifyOTPSchema}
    />
  )
}

export default VerifyOTPForm
