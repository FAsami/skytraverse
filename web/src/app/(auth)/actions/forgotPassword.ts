'use server'

import { SendOTPSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { getUser } from '@/app/query'
import { isEmpty } from 'lodash'
import { redirect } from 'next/navigation'
import { encrypt } from '@/app/utils/cryptography'
import { sendOTP } from './sendOTP'

const forgotPassword: AuthAction<typeof SendOTPSchema> = async (
  values,
  { callbackUrl }
) => {
  let token = ''
  try {
    const validatedFields = SendOTPSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }

    const { email, phone } = validatedFields.data
    const user = await getUser({ email, phone })

    if (!user?.email && !user?.phone) {
      return {
        success: false,
        error: 'No user is associated with this email or phone'
      }
    }
    const result = await sendOTP({ email, phone })
    if (result.success) {
      token = await encrypt({
        email: user?.email,
        phone: user?.phone,
        name: user?.name,
        scope: 'FORGOT_PASSWORD'
      })
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
   *
   * */

  if (!isEmpty(token)) {
    redirect(
      `/verify?token=${encodeURIComponent(
        token
      )}&callbackUrl=${encodeURIComponent(callbackUrl)}`
    )
  }
}
export { forgotPassword }
