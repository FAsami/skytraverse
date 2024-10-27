import type { Metadata } from 'next'
import './globals.css'
import { font } from './fonts'

export const metadata: Metadata = {
  title: 'skytraverse',
  description: 'Make you flight easy'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font} antialiased`}>{children}</body>
    </html>
  )
}
