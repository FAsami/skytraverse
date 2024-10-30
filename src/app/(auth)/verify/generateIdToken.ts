'use server'
import jwt from 'jsonwebtoken'
import { auth } from '@/auth'
import { encrypt, decrypt } from '@/app/utils/cryptography'
import { gqlAdminClient } from '@/app/lib'
import {
  DeleteOtpMutation,
  DeleteOtpMutationVariables,
  Insert_OtpMutation
} from '@/types/gql/graphql'
import { CREATE_OTP } from '@/app/graphql/mutation'
import { GET_OTP_BY_USER_ID } from '@/app/graphql/query'

const SECRET_KEY = process.env.JWT_SECRET_KEY as string

if (!SECRET_KEY) {
  throw new Error(
    'Missing secret key. Please set the JWT_SECRET_KEY environment variable.'
  )
}

const generateIdToken = async (userId: string): Promise<string | null> => {
  try {
    if (userId) {
      const token = jwt.sign(
        {
          id: userId
        },
        SECRET_KEY,
        {
          expiresIn: '1h'
        }
      )

      await gqlAdminClient.request<DeleteOtpMutation>(GET_OTP_BY_USER_ID, {
        userId: userId,
        tokenType: 'SET_PASSWORD_TOKEN'
      } as DeleteOtpMutationVariables)

      const data = await gqlAdminClient.request<Insert_OtpMutation>(
        CREATE_OTP,
        {
          object: {
            userId: userId,
            token,
            tokenType: 'SET_PASSWORD_TOKEN',
            validTill: 1800
          }
        }
      )
      if (data.insert_otp_one?.created_at) {
        const encryptedIdToken = await encrypt({ token })
        return encryptedIdToken
      } else {
        return null
      }
    }
    return null
  } catch (error) {
    console.error('Error in generating Id Token:', error)
    throw error
  }
}

export { generateIdToken }

export const isTokenValid = async (searchParamToken: string) => {
  const decrypted = (await decrypt(searchParamToken)) as { token: string }
  if (decrypted?.token) {
    const decoded = jwt.verify(
      decrypted?.token,
      process.env.JWT_SECRET_KEY!
    ) as { id: string; iat: number; exp: number }

    const session = await auth()
    if (session?.user?.id === decoded?.id) {
      return true
    }

    return false
  }
  return false
}
