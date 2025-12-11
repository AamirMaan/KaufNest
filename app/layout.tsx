import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KaufNest - E-commerce Portfolio',
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
