import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Monarch Paris - Crafting irresistible digital experiences for founders and startups',
  description:
    'We are a digital product partner that crafts irresistible digital experiences for founders and startups. We help you build your product from idea to launch.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const parisTime = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans text-black`}>
        <div className='md:block hidden'>
          <p className='fixed bottom-8 left-8 font-medium font-display text-neutral-400'>
            led by{' '}
            <Link
              className='underline'
              target='_blank'
              href='https://x.com/angegoua_'
            >
              @ange
            </Link>
          </p>
          <p className='fixed bottom-8 right-8 font-medium font-display text-neutral-400'>
            from paris • {parisTime}
          </p>
        </div>

        {children}
      </body>
    </html>
  )
}
