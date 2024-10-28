import './globals.css'
import { font } from './fonts'
import type { Metadata } from 'next'
import { apolloClient } from './lib'
import { GetBrandQuery } from '@/types/gql/graphql'
import { GET_BRAND_INFO } from './graphql/query'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${font} antialiased`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}

export default RootLayout

const generateMetadata = async (): Promise<Metadata> => {
  const metaData = await getBrandMetaData()
  return {
    title: metaData.title || process.env.BRAND_TITLE || '',
    ...(metaData && {
      ...metaData
    })
  }
}
export { generateMetadata }

const getBrandMetaData = cache(async () => {
  const { brand } = await apolloClient.request<GetBrandQuery>(GET_BRAND_INFO, {
    title: process.env.BRAND_TITLE
  })
  if (!brand?.[0]) {
    notFound()
  }
  const metaData = brand[0]?.metaData as Metadata
  return metaData
})
