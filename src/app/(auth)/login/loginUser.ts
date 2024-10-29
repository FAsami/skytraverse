'use server'
import { getUser } from '@/app/query'
import { signIn } from '@/auth'
import { LoginSchema } from '../authSchema'
import { AuthAction } from '@/types/authForm'
import { redirect } from 'next/navigation'
import { isValidUrl } from '@/app/utils/isValidUrl'
import bcrypt from 'bcryptjs'

const loginUser: AuthAction<typeof LoginSchema> = async (
  values,
  { callbackUrl }
) => {
  let isLoggedIn = false
  try {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
      return { success: false, error: 'Invalid fields!' }
    }
    const { email, password, phone } = validatedFields.data

    const method = phone ? 'phone_password' : 'email_password'

    const user = await getUser({ email, phone })
    if (!user || !user.password) {
      return {
        success: false,
        error: 'Invalid username or password'
      }
    }

    const isMatched = await bcrypt.compare(password, user.password)
    if (isMatched) {
      const res = await signIn(method, {
        ...(method === 'phone_password' ? { phone } : { email }),
        password,
        redirect: false
      })
      console.log(res)
      isLoggedIn = isValidUrl(res)
    } else {
      return {
        success: false,
        error: 'Invalid credentials'
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
   * Token will be populated if authentication and user creating is successful and then we will redirect
   * */

  if (isLoggedIn) {
    redirect(callbackUrl)
  }
}
export { loginUser }
