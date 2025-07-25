import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GenifyDesigns - AI-Powered Print-on-Demand Platform',
  description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly. AI-powered print-on-demand for shirts, mugs, posters, and more.',
  authors: [{ name: 'GenifyDesigns' }],
  keywords: ['AI design', 'print on demand', 'custom t-shirts', 'personalized gifts', 'AI art', 'custom mugs', 'posters'],
  robots: 'index, follow',
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    title: 'GenifyDesigns - AI-Powered Print-on-Demand',
    description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly.',
    url: 'https://genifydesigns.store',
    siteName: 'GenifyDesigns',
    locale: 'en_US',
    images: [
      {
        url: 'https://genifydesigns.store/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GenifyDesigns - AI-Powered Print-on-Demand',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenifyDesigns - AI-Powered Print-on-Demand',
    description: 'Turn your ideas into unique, wearable, giftable, or display-worthy designs instantly.',
    images: ['https://genifydesigns.store/og-image.jpg'],
  },
  metadataBase: new URL('https://genifydesigns.store'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
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