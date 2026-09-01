import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boughtopia',
  description:
    'Boughtopia helps multi-platform sellers launch, manage, and understand their business across Amazon, eBay, Etsy, Shopify, and TikTok Shop.',
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