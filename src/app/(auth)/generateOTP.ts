'use server'
import crypto from 'crypto'
import { getUser } from '../query'
import { gqlAdminClient } from '../lib'
import {
  GetOtpByUserIdQuery,
  GetOtpByUserIdQueryVariables,
  Insert_OtpMutation
} from '@/types/gql/graphql'
import { CREATE_OTP } from '../graphql/mutation'
import { GET_OTP_BY_USER_ID } from '../graphql/query'
import { sendEmail } from '../utils/sendEmail'
import { emailOTP } from '@/template/emailOTP'
import { sendMessage } from '../utils/setMessage'
import { phoneOTP } from '@/template/phoneOTP'

const OTP_RESEND_INTERVAL = 2 * 60 * 1000

const generateOTP = async ({
  email,
  phone
}: {
  email: string
  phone: string
}) => {
  const user = await getUser({ email, phone })

  if (user?.id && user.name) {
    const data = await gqlAdminClient.request<GetOtpByUserIdQuery>(
      GET_OTP_BY_USER_ID,
      {
        userId: user?.id
      } as GetOtpByUserIdQueryVariables
    )

    const latestOtp = data.otp[0]
    const token = latestOtp
      ? latestOtp.token
      : crypto.randomInt(100_000, 1_000_000).toString()

    if (latestOtp) {
      const timeSinceLastOtp =
        Date.now() - new Date(latestOtp.created_at).getTime()

      if (timeSinceLastOtp < OTP_RESEND_INTERVAL) {
        return { error: 'OTP can only be resent after 2 minutes' }
      }
    }

    if (user.phone) {
      await sendMessage({
        phone,
        message: phoneOTP(latestOtp.token)
      })
    }

    if (user.email) {
      await sendEmail({
        from: {
          email: process.env.NO_REPLY_EMAIL!,
          name: 'noreply'
        },
        to: {
          email,
          name: user.name
        },
        subject: 'Your OTP Code',
        htmlbody: emailOTP({ name: user.name, otp: latestOtp.token })
      })
    }

    await gqlAdminClient.request<Insert_OtpMutation>(CREATE_OTP, {
      object: {
        userId: user?.id,
        token
      }
    })
  }

  return { success: 'OTP sent successfully' }
}

export default generateOTP
