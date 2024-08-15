import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ProgressiveBlur } from './components/progressive-blur'
import { DrawerProvider } from '@/lib/drawer-context'

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
      <head>
        <script async src='https://cdn.seline.so/seline.js'></script>
      </head>
      <DrawerProvider>
        <body className={`${inter.variable} font-sans text-black`}>
          <div className='md:block hidden'>
            <p className='fixed z-10 bottom-8 left-8 font-medium font-display text-neutral-400'>
              led by{' '}
              <Link
                target='_blank'
                className='underline'
                href='https://x.com/angegoua_'
              >
                @ange
              </Link>
            </p>
            <p className='fixed z-10 bottom-8 right-8 font-medium font-display text-neutral-400'>
              from paris • {parisTime}
            </p>
          </div>

          <div className='min-h-screen'>{children}</div>
          {/* make a progressive transparent blur fixed a the bottom of the screen */}
          <ProgressiveBlur />
          <section className='bg-gray-100 w-full h-32 mt-24 '>
            <div className='max-w-2xl mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-4 px-4 '>
              <p className='text-neutral-500 text-sm'>
                © 2024 Monarch Paris. All rights reserved.
              </p>
              <p className='text-neutral-500 text-sm'>
                <Link target='_blank' href='mailto:ange@monarchieparis.com'>
                  <span className='underline'>ange@monarchieparis.com</span>
                </Link>
              </p>
            </div>
          </section>
        </body>
      </DrawerProvider>
    </html>
  )
}
