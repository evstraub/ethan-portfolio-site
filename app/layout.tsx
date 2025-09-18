
import '../styles/global.css'
import '../styles/layout.css'
import '../styles/typography.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ThemeScript from '../components/ThemeScript'
import Plausible from '../components/Plausible'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethan Straub — Portfolio',
  description: 'React, C++, Game Dev, and AI projects.',
  openGraph: {
    title: 'Ethan Straub — Portfolio',
    description: 'React, C++, Game Dev, and AI projects.',
    type: 'website',
    url: 'https://your-domain.com',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ethan Portfolio' }]
  },
  metadataBase: new URL('https://your-domain.com'),
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Straub — Portfolio',
    description: 'React, C++, Game Dev, and AI projects.',
    images: ['/og.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeScript />
        <Plausible />
        <a className="skip-link" href="#content">Skip to content</a>
        <Nav />
        <main id="content" className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
