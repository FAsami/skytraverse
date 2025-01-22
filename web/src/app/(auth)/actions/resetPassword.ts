'use server'
import { ResetPasswordSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { auth } from '@/auth'
import jwt, { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'
import { decrypt } from '@/app/utils/cryptography'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { gqlAdminClient } from '@/app/lib'
import { UPDATE_USER_BY_ID } from '@/app/graphql/mutation'
import {
  DeleteOtpMutation,
  DeleteOtpMutationVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables
} from '@/types/gql/graphql'
import { GET_OTP_BY_USER_ID } from '@/app/graphql/query'

const resetPassword: AuthAction<typeof ResetPasswordSchema> = async (
  values,
  { callbackUrl }
) => {
  let isPasswordChanged = false
  try {
    const validatedFields = ResetPasswordSchema.safeParse(values)

    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }
    const { password, token } = validatedFields.data
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        error: 'User not found'
      }
    }
    const SECRET_KEY = process.env.JWT_SECRET_KEY as string

    if (!SECRET_KEY) {
      throw new Error(
        'Missing secret key. Please set the JWT_SECRET_KEY environment variable.'
      )
    }
    const decryptedToken = (await decrypt(token)) as { token: string }
    const decodedToken = await jwt.verify(
      decryptedToken?.token,
      process.env.JWT_SECRET_KEY!
    )
    if (decodedToken) {
      const data = await gqlAdminClient.request<UpdateUserMutation>(
        UPDATE_USER_BY_ID,
        {
          userId: session?.user.id,
          _set: { password: await bcrypt.hash(password, 10) }
        } as UpdateUserMutationVariables
      )
      if (data.update_users_by_pk?.updated_at) {
        await gqlAdminClient.request<DeleteOtpMutation>(GET_OTP_BY_USER_ID, {
          userId: session?.user.id,
          tokenType: 'SET_PASSWORD_TOKEN'
        } as DeleteOtpMutationVariables)
        isPasswordChanged = true
      }
    }
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return {
        success: false,
        error: 'Token expired. Please request a new password reset.'
      }
    } else if (error instanceof JsonWebTokenError) {
      return { success: false, error: 'Invalid token. Please try again.' }
    } else {
      console.error('Error resetting password:', error)
      return { success: false, error: 'Unauthorized access.' }
    }
  }
  if (isPasswordChanged) {
    redirect(callbackUrl)
  }
}
export { resetPassword }
