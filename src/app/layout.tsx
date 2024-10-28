import './globals.css'
import { font } from './fonts'
import type { Metadata } from 'next'
import { apolloClient } from './lib'
import { GetBrandQuery } from '@/types/gql/graphql'
import { GET_BRAND_INFO } from './graphql/query'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Header } from './components'
import { ConfigProvider } from 'antd'
import { theme } from '@/theme/antd'

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { brand } = await apolloClient.request<GetBrandQuery>(GET_BRAND_INFO, {
    title: process.env.BRAND_TITLE
  })
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <body className={`${font} antialiased bg-blue-50`}>
          <AntdRegistry>
            <Header brand={brand?.[0]} />
            {children}
          </AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
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
