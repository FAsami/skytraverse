'use server'

import { getUser } from '@/app/query'
import { VerifyOTPSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { redirect } from 'next/navigation'
import { GET_OTP_BY_USER_ID } from '@/app/graphql/query'
import { gqlAdminClient } from '@/app/lib'
import {
  GetOtpByUserIdQuery,
  GetOtpByUserIdQueryVariables
} from '@/types/gql/graphql'
import { signIn } from '@/auth'
import { generateIdToken } from './generateIdToken'
import { decrypt } from '@/app/utils/cryptography'

const verifyOTP: AuthAction<typeof VerifyOTPSchema> = async (
  values,
  { callbackUrl, token }
) => {
  let userId = null
  let isOTPVerified = false
  try {
    const validatedFields = VerifyOTPSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }
    const { email, phone, otp } = validatedFields.data
    const user = await getUser({ email, phone })
    if (!user?.id) {
      return {
        success: false,
        error: 'No user is associated with this account '
      }
    } else {
      userId = user?.id
      const data = await gqlAdminClient.request<GetOtpByUserIdQuery>(
        GET_OTP_BY_USER_ID,
        {
          userId: user?.id
        } as GetOtpByUserIdQueryVariables
      )
      if (data.otp?.some((node) => node.token === otp)) {
        await signIn('verify_otp', {
          email,
          phone,
          redirect: false
        })

        isOTPVerified = true
      } else {
        return {
          success: false,
          error: 'OTP does not match. Please try again '
        }
      }
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong !'
    }
  }
  /**
   * In Server Actions and Route Handlers, redirect should be called after the try/catch block.
   * */
  const decrypted = (await decrypt(token)) as {
    phone: string
    email: string
    name: string
    scope: 'FORGOT_PASSWORD' | 'REGISTER'
  }
  if (userId && isOTPVerified) {
    const idToken = await generateIdToken(userId)
    if (decrypted?.scope === 'FORGOT_PASSWORD') {
      if (idToken) {
        redirect(
          `/set-password?token=${encodeURIComponent(
            idToken
          )}&callbackUrl=${encodeURIComponent(callbackUrl)}`
        )
      } else {
        return {
          success: false,
          error: 'Failed to create Token !'
        }
      }
    } else {
      redirect(callbackUrl)
    }
  }
}
export { verifyOTP }
