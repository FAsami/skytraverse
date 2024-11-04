import './globals.css'
import 'animate.css'
import { font } from './fonts'
import type { Metadata } from 'next'
import { apolloClient } from './lib'
import { GetBrandQuery } from '@/types/gql/graphql'
import { GET_BRAND_INFO } from './graphql/query'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { theme } from '@/theme/antd'
import { ReCaptchaProvider } from './providers/recaptcha'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { brand } = await apolloClient.request<GetBrandQuery>(GET_BRAND_INFO, {
    title: process.env.BRAND_TITLE
  })
  return (
    <SessionProvider session={await auth()}>
      <ConfigProvider theme={theme}>
        <ReCaptchaProvider>
          <html lang="en">
            <body className={`${font} antialiased bg-blue-50 overflow-hidden`}>
              <AntdRegistry>
                <Header brand={brand?.[0]} />
                <main className="h-[calc(100vh-var(--header-height))] overflow-y-auto space-y-4">
                  <div>{children}</div>
                  <Footer brand={brand?.[0]} />
                </main>
              </AntdRegistry>
            </body>
          </html>
        </ReCaptchaProvider>
      </ConfigProvider>
    </SessionProvider>
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
