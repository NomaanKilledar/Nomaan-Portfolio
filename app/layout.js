
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Nomaan Killedar | Developer & Cybersecurity',
    template: '%s | Nomaan Killedar',
  },
  description:
    'Portfolio of Nomaan Killedar, showcasing software development, Python projects, and cybersecurity learning.',
  applicationName: 'Nomaan Killedar Portfolio',
  openGraph: {
    title: 'Nomaan Killedar | Developer & Cybersecurity',
    description:
      'Explore my software development projects, Python tools, and cybersecurity journey.',
    siteName: 'Nomaan Killedar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nomaan Killedar | Developer & Cybersecurity',
    description:
      'Explore my software development projects, Python tools, and cybersecurity journey.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
