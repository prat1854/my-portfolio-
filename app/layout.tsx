import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

import { Providers } from './providers'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://my-portfolio-six-teal-67.vercel.app'),

  title: {
    default: 'Prateek Bajpai | Full Stack Developer',
    template: '%s | Prateek Bajpai',
  },

  description:
    'Prateek Bajpai is a Full Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MySQL, and MongoDB. Explore projects, certifications, technical skills, and professional experience.',

  keywords: [
    'Prateek Bajpai',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Developer',
    'MySQL',
    'MongoDB',
    'Express.js',
    'Portfolio',
  ],

  authors: [
    {
      name: 'Prateek Bajpai',
    },
  ],

  creator: 'Prateek Bajpai',
  publisher: 'Prateek Bajpai',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://my-portfolio-six-teal-67.vercel.app',
  },

  openGraph: {
    title: 'Prateek Bajpai | Full Stack Developer',
    description:
      'Explore projects, certifications, technical skills, and professional work by Prateek Bajpai.',
    url: 'https://my-portfolio-six-teal-67.vercel.app',
    siteName: 'Prateek Bajpai Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prateek Bajpai | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MySQL, and MongoDB.',
  },

  category: 'Technology',
}

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