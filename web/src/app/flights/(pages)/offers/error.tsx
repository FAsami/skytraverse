'use client'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { MdSentimentDissatisfied } from 'react-icons/md'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 bg-white shadow-sm rounded-md mx-auto max-w-screen-sm p-6">
      <Image
        alt="Not found"
        height={300}
        width={300}
        src="https://res.cloudinary.com/dffqrc36j/image/upload/v1730302837/search-result_jdujlr.png"
      />
      <div className="text-2xl text-neutral-600 font-semibold flex items-center gap-2">
        Sorry <MdSentimentDissatisfied className="text-amber-700" />
      </div>
      <p className="text-sm text-gray-500 mb-8 px-32 text-center">
        There is something went wrong on our side. Please{' '}
        <Link className="text-blue-500 underline" href="/contact">
          Contact us
        </Link>{' '}
        if you think this is an error
      </p>
      <Link href="/">
        <Button iconPosition="end" icon={<BiChevronRight />} type="primary">
          Go Back Home
        </Button>
      </Link>
    </div>
  )
}

export default ErrorPage
