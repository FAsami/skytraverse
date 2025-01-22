import { auth } from '@/auth'
import { Metadata } from 'next'
import { ProfileSidebar } from './components/ProfileSidebar'

const AccountLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex h-full min-h-[calc(100vh-var(--header-height))]">
      <ProfileSidebar />
      <div className="m-2 p-4 shadow-sm rounded-md bg-white w-full">
        {children}
      </div>
    </div>
  )
}

export default AccountLayout

const generateMetadata = async (): Promise<Metadata> => {
  const session = await auth()
  return {
    title: session?.user?.name || process.env.BRAND_TITLE || ''
  }
}
export { generateMetadata }
