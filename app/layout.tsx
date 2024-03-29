import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './nav';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cafebean',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen md:flex-row flex-col justify-center items-center">
          <Nav />
          <div className="flex-1">
            {children}
          </div>
        </main> 
      </body>
    </html>
  )
}
