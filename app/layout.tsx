import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://prateek-bajpai-portfolio.vercel.app'),
  title: 'Prateek Bajpai | Full Stack Developer',
  description:
    'Frontend engineer building performant, accessible, and scalable React/Next.js products with measurable user impact.',
  openGraph: {
    title: 'Prateek Bajpai | Full Stack Developer',
    description:
      'Explore projects, engineering wins, and product-focused frontend work by Prateek Bajpai.',
    type: 'website',
    siteName: 'Prateek Bajpai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prateek Bajpai | Full Stack Developer',
    description:
      'Frontend engineer building production-grade React and Next.js experiences.',
  },
  alternates: {
    canonical: '/',
  },
}

import { Providers } from './providers'
import ThemeToggle from './components/ThemeToggle'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="fixed right-4 top-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
