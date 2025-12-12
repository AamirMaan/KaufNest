import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KaufNest',
  description: 'Professional e-commerce solutions for Amazon and eBay marketplaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}