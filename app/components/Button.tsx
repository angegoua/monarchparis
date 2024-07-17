import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
}

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'py-2 px-6 relative font-medium font-display',
        variant === 'primary' &&
          'text-black  bg-gradient-to-b from-white to-[#E1E1E1] rounded-full hover:bg-gradient-to-t transition-all duration-300',
        variant === 'secondary' &&
          'bg-white text-black border-gray-200 border before:from-gray-500 before:inset-0 before:absolute before:bg-gradient-to-b  before:to-transparent rounded-full before:rounded-full before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300'
      )}
    >
      {children}
    </button>
  )
}
