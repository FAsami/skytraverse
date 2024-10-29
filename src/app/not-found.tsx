import { Button } from 'antd'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { MdOutlineSentimentDissatisfied } from 'react-icons/md'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 bg-white shadow-sm rounded-md mx-auto max-w-screen-sm p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 flex items-center gap-3 py-8">
        4
        <span className="text-blue-400">
          <MdOutlineSentimentDissatisfied />
        </span>
        4
      </h1>
      <h2 className="text-2xl text-gray-600 text-center mb-5">
        Oops! <br /> Page not found.
      </h2>
      <p className="text-sm text-gray-500 mb-8 px-32 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button iconPosition="end" icon={<BiChevronRight />} type="primary">
          Go Back Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
