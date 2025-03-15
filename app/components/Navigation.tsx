'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100'>
      <div className='max-w-4xl mx-auto px-4 md:px-0 flex items-center justify-between h-16'>
        <Link href='/'>
          <span className='font-medium font-display'>Monarch Paris</span>
        </Link>

        <div className='flex items-center gap-6'>
          <Link
            href='/'
            className={`text-sm ${
              pathname === '/'
                ? 'text-black font-medium'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Home
          </Link>
          <Link
            href='/reviews'
            className={`text-sm ${
              pathname === '/reviews'
                ? 'text-black font-medium'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            Reviews
          </Link>
          <Link
            href='https://cal.com/ange-monarchparis/discovery'
            target='_blank'
            className='text-sm text-neutral-500 hover:text-black'
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  )
}
