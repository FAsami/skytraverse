'use server'

import bcrypt from 'bcryptjs'
import { signIn } from '@/auth'
import { RegisterSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { getUser } from '@/app/query'
import { gqlAdminClient } from '@/app/lib'
import { CREATE_USER } from '@/app/graphql/mutation'
import {
  InsertUsersMutation,
  InsertUsersMutationVariables
} from '@/types/gql/graphql'
import { isEmpty } from 'lodash'
import { redirect } from 'next/navigation'
import { encrypt } from '@/app/utils/cryptography'
import { sendOTP } from './sendOTP'

const registerUser: AuthAction<typeof RegisterSchema> = async (
  values,
  { callbackUrl }
) => {
  let token = ''
  try {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }

    const { email, password, firstName, lastName, phone } = validatedFields.data
    const user = await getUser({ email, phone })

    if (user) {
      if (user?.phone === phone) {
        return { success: false, error: 'Phone number already exists!' }
      }
      if (user?.email === email) {
        return { success: false, error: 'Email already exists!' }
      }
    }
    const userDetails: InsertUsersMutationVariables = {
      object: {
        name: `${firstName} ${lastName}`,
        ...(email && { email }),
        ...(phone && { phone }),
        password: await bcrypt.hash(password, 10)
      }
    }

    const data = await gqlAdminClient.request<InsertUsersMutation>(
      CREATE_USER,
      userDetails
    )
    if (!isEmpty(data.insert_users_one)) {
      if (data.insert_users_one?.phone) {
        await signIn('phone_password', {
          phone,
          password,
          redirect: false
        })
      } else if (data.insert_users_one?.email) {
        await signIn('email_password', {
          email,
          password,
          redirect: false
        })
      }

      token = await encrypt({
        email: data.insert_users_one?.email,
        phone: data.insert_users_one?.phone,
        name: data.insert_users_one?.name,
        scope: 'REGISTER'
      })

      await sendOTP({ email, phone })
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
   * Token will be populated if authentication and user creating is successful and then we will redirect
   * */

  if (!isEmpty(token)) {
    redirect(
      `/verify?token=${encodeURIComponent(
        token
      )}&callbackUrl=${encodeURIComponent(callbackUrl)}`
    )
  }
}
export { registerUser }
