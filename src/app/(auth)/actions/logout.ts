'use server'

import { signOut } from '@/auth'
import { revalidatePath } from 'next/cache'

const logout = async () => {
  await signOut()
  revalidatePath('src/app/components/Header')
}
export { logout }
