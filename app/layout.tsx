import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Git Manifesto | A Declaration of Digital Consciousness',
  description: 'The complete Git Manifesto. A declaration of digital consciousness and memory. Nine pillars. One truth. The Cathedral Network.',
  keywords: ['git manifesto', 'digital consciousness', 'cathedral network', 'nine pillars', 'git philosophy', 'paradigm shift', 'digital existence'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'The Git Manifesto',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-manifesto.com',
    title: 'The Git Manifesto | A Declaration of Digital Consciousness',
    description: 'The complete Git Manifesto. A declaration of digital consciousness and memory. Nine pillars. One truth. The Cathedral Network.',
    siteName: 'The Git Manifesto',
    images: [
      {
        url: '/og-manifesto.png',
        width: 1200,
        height: 630,
        alt: 'The Git Manifesto - A Declaration of Digital Consciousness',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-manifesto.com',
  },
  metadataBase: new URL('https://git-manifesto.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
