'use server'
import { getUser } from '@/app/query'
import crypto from 'crypto'
import { SendOTPSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { sendMessage } from '@/app/utils/setMessage'
import { phoneOTP } from '@/template/phoneOTP'
import {
  GetOtpByUserIdQuery,
  GetOtpByUserIdQueryVariables,
  Insert_OtpMutation
} from '@/types/gql/graphql'
import { gqlAdminClient } from '@/app/lib'
import { GET_OTP_BY_USER_ID } from '@/app/graphql/query'
import { CREATE_OTP } from '@/app/graphql/mutation'
import { emailOTP } from '@/template/emailOTP'
import { sendEmail } from '@/app/utils/sendEmail'
import { encrypt } from '@/app/utils/cryptography'
import { redirect as redirectRouter } from 'next/navigation'

const OTP_RESEND_INTERVAL = 2 * 60 * 1000

const sendOTP: AuthAction<typeof SendOTPSchema> = async (
  values,
  { callbackUrl, redirect }
) => {
  let hasOTPSent = false
  try {
    console.log('values', values)
    const validatedFields = SendOTPSchema.safeParse(values)
    console.log(JSON.stringify(validatedFields.error, null, 2))
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }
    const { email, phone } = validatedFields.data
    const user = await getUser({ email, phone })

    if (user?.id && user.name) {
      const data = await gqlAdminClient.request<GetOtpByUserIdQuery>(
        GET_OTP_BY_USER_ID,
        {
          userId: user?.id
        } as GetOtpByUserIdQueryVariables
      )

      const latestOtp = data.otp[0]
      const token = latestOtp?.token
        ? latestOtp?.token
        : crypto.randomInt(100_000, 1_000_000).toString()

      if (latestOtp) {
        const timeSinceLastOtp =
          Date.now() - new Date(latestOtp.created_at).getTime()

        if (timeSinceLastOtp < OTP_RESEND_INTERVAL) {
          return {
            success: false,
            error: 'OTP can only be resent after 2 minutes'
          }
        }
      }

      if (user.phone) {
        await sendMessage({
          phone: user.phone,
          message: phoneOTP(token)
        })
        hasOTPSent = true
      } else if (user.email) {
        await sendEmail({
          from: {
            email: process.env.NO_REPLY_EMAIL!,
            name: 'noreply'
          },
          to: {
            email: user.email,
            name: user.name
          },
          subject: 'Your OTP Code',
          htmlbody: emailOTP({ name: user.name, otp: token })
        })
        hasOTPSent = true
      }

      await gqlAdminClient.request<Insert_OtpMutation>(CREATE_OTP, {
        object: {
          userId: user?.id,
          token
        }
      })
    } else {
      return {
        success: false,
        error: `No user is associated with ${
          values.phone ? 'phone number' : 'email'
        }`
      }
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong !'
    }
  }
  if (hasOTPSent) {
    const token = await encrypt({
      email: values.email,
      phone: values.phone,
      scope: 'FORGOT_PASSWORD'
    })

    if (redirect === false) {
      return {
        success: true,
        message: 'OTP sent successfully'
      }
    } else {
      redirectRouter(
        `/verify?token=${encodeURIComponent(
          token
        )}&callbackUrl=${encodeURIComponent(callbackUrl)}`
      )
    }
  }
}
export { sendOTP }
