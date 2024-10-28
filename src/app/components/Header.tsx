import { GetBrandQuery } from '@/types/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'
import { BiSupport } from 'react-icons/bi'

const Header = ({ brand }: { brand: GetBrandQuery['brand'][0] | null }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <Link href="/" className="block h-16 w-16 cursor-pointer">
          <Image
            alt={brand?.title || 'Brand name'}
            height={400}
            width={400}
            className="h-full w-full"
            src={brand?.logo.default}
          />
        </Link>
        <div className="flex gap-6 text-base">
          <Link href="/support" className="text-neutral-700 flex items-center">
            <BiSupport /> &nbsp;
            <span>Support</span>
          </Link>
          <Link
            href="/login"
            className="text-white flex items-center justify-center font-semibold rounded-full bg-blue-600 px-5 py-1.5"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
