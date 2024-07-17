import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Link from 'next/link'

const satoshi = localFont({
  src: './satoshi.woff2',
  display: 'swap',
  variable: '--font-satoshi',
})

const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
  variable: '--font-instrument',
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
      <body
        className={`${satoshi.variable} ${instrument.variable} font-sans text-black`}
      >
        <div className='md:block hidden'>
          <p className='fixed bottom-8 left-8 font-medium font-display text-neutral-400'>
            Led by{' '}
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
