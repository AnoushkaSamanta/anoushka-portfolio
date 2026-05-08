import type { Metadata } from 'next'
import './globals.css' // imports globals + google fonts
import LenisInit from '@/components/ui/LenisInit'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Anoushka Samanta — Full Stack Engineer',
  description:
    'B.Tech CSE student at IIIT Kottayam (CGPA 9.95) building production-grade web systems, AI-integrated applications, and blockchain tools.',
  keywords: [
    'Anoushka Samanta', 'full stack engineer', 'IIIT Kottayam',
    'Next.js developer', 'React developer', 'portfolio',
  ],
  openGraph: {
    title: 'Anoushka Samanta',
    description: 'Full Stack Engineer · B.Tech CSE · IIIT Kottayam',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anoushka Samanta',
    description: 'Full Stack Engineer · B.Tech CSE · IIIT Kottayam',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LenisInit />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
