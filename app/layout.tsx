import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cafebean',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen md:flex-row flex-col justify-center items-center">
          <Nav />
          <div>
            {children}
          </div>
        </main> 
      </body>
    </html>
  )
}
