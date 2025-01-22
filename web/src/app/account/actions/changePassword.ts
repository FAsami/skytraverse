'use server'

import { AuthAction } from '@/types/authForm'
import { ChangePasswordSchema } from '@/app/(auth)/authSchema'
import { auth } from '@/auth'
import { gqlAdminClient } from '@/app/lib'
import {
  UpdateUserMutation,
  UpdateUserMutationVariables
} from '@/types/gql/graphql'
import { UPDATE_USER_BY_ID } from '@/app/graphql/mutation'
import bcrypt from 'bcryptjs'
import { getUser } from '@/app/query'

const changePassword: AuthAction<typeof ChangePasswordSchema> = async (
  values
) => {
  try {
    const validatedFields = ChangePasswordSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }
    const session = await auth()
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorize access!' }
    }
    const { oldPassword, password } = validatedFields.data

    const user = await getUser({ id: session?.user?.id })
    if (!user?.id || !user?.password) {
      return { success: false, error: 'Unauthorize access!' }
    }

    const isMatched = await bcrypt.compare(oldPassword, user.password)
    if (isMatched) {
      const data = await gqlAdminClient.request<UpdateUserMutation>(
        UPDATE_USER_BY_ID,
        {
          userId: session?.user.id,
          _set: { password: await bcrypt.hash(password, 10) }
        } as UpdateUserMutationVariables
      )
      if (data.update_users_by_pk?.updated_at) {
        return { success: true, message: 'Password updated successfully!' }
      }
    } else {
      return {
        success: false,
        error: 'Password do not match with old password'
      }
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Something went wrong !'
    }
  }
}
export { changePassword }
