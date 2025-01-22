'use server'
import { signIn } from '@/auth'

const login = async (formData: FormData) => {
  const provider = (formData.get('provider') as string) || 'credential'
  const callbackUrl = (formData.get('callbackUrl') as string) || '/'

  await signIn(provider, {
    redirect: true,
    redirectTo: callbackUrl
  })
}

export { login }
