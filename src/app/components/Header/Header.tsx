import { auth } from '@/auth'
import { GetBrandQuery } from '@/types/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'
import { BiSupport } from 'react-icons/bi'
import { AuthMenu } from './AuthMenu'

const Header = async ({
  brand
}: {
  brand: GetBrandQuery['brand'][0] | null
}) => {
  const session = await auth()
  return (
    <header className="bg-white shadow-sm sticky top-0 h-[var(--header-height)]">
      <div className="max-w-screen-xl px-3 mx-auto py-3 flex items-center justify-between">
        <Link href="/" className="block h-16 w-16 cursor-pointer">
          <Image
            alt={brand?.title || 'Brand name'}
            height={400}
            width={400}
            className="h-full w-full"
            src={brand?.logo.default}
          />
        </Link>
        <div className="flex gap-6 text-base items-center">
          <Link
            href="/support"
            className="text-neutral-700 text-sm flex items-center"
          >
            <BiSupport /> &nbsp;
            <span>Support</span>
          </Link>
          <AuthMenu session={session} />
        </div>
      </div>
    </header>
  )
}

export { Header }
