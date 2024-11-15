import { auth } from '@/auth'
import { GetBrandQuery } from '@/types/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'
import { AuthMenu } from './AuthMenu'

const Header = async ({
  brand
}: {
  brand: GetBrandQuery['brand_brands'][0] | null
}) => {
  const session = await auth()
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 h-[var(--header-height)]">
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
        <div className="flex gap-2 md:gap-6 text-base items-center">
          <Link
            href="/support"
            className="text-neutral-700 text-sm flex items-center font-semibold"
          >
            <span>Contact</span>
          </Link>
          <Link
            href="/support"
            className="text-neutral-700 text-sm flex items-center font-semibold"
          >
            <span>FAQ</span>
          </Link>
          <AuthMenu session={session} />
        </div>
      </div>
    </header>
  )
}

export { Header }
