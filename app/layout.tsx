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
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI2IiB5PSI2Ij4KPHBhdGggZD0ibTIxLjY0IDMuNjQtMS4yOC0xLjI4YTEuMjEgMS4yMSAwIDAgMC0xLjcyIDBMMi4zNiAxOC42NGExLjIxIDEuMjEgMCAwIDAgMCAxLjcybDEuMjggMS4yOGExLjIgMS4yIDAgMCAwIDEuNzIgMEwyMS42NCA1LjM2YTEuMiAxLjIgMCAwIDAgMC0xLjcyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0ibTE0IDcgMyAzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNSA2djQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOSAxNHY0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAgMnYyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNyA4SDMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMSAxNmg0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEgM0g5IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2N0VFQSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3NjRCQTIiLz4KPC9zdmc+',
        type: 'image/svg+xml',
      },
    ],
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
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI2IiB5PSI2Ij4KPHBhdGggZD0ibTIxLjY0IDMuNjQtMS4yOC0xLjI4YTEuMjEgMS4yMSAwIDAgMC0xLjcyIDBMMi4zNiAxOC42NGExLjIxIDEuMjEgMCAwIDAgMCAxLjcybDEuMjggMS4yOGExLjIgMS4yIDAgMCAwIDEuNzIgMEwyMS42NCA1LjM2YTEuMiAxLjIgMCAwIDAgMC0xLjcyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0ibTE0IDcgMyAzIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNSA2djQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOSAxNHY0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAgMnYyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNyA4SDMiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMSAxNmg0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEgM0g5IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzY2N0VFQSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3NjRCQTIiLz4KPC9zdmc+" />
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