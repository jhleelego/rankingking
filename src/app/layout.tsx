import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/_components/ClientLayout'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '랭킹킹',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
