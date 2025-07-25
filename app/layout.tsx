import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GenifyDesigns - AI-Powered Print-on-Demand Platform',
  description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly. AI-powered print-on-demand for shirts, mugs, posters, and more.',
  keywords: 'AI design, print on demand, custom t-shirts, personalized gifts, AI art, custom mugs, posters',
  authors: [{ name: 'GenifyDesigns' }],
  openGraph: {
    title: 'GenifyDesigns - AI-Powered Print-on-Demand',
    description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly.',
    url: 'https://genifydesigns.store',
    siteName: 'GenifyDesigns',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GenifyDesigns - AI-Powered Print-on-Demand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenifyDesigns - AI-Powered Print-on-Demand',
    description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
} 