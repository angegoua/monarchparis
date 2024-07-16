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
        'py-2 px-6 relative before:inset-0 before:absolute  before:bg-gradient-to-b  before:to-transparent rounded-full before:rounded-full before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300',
        variant === 'primary' && 'text-white bg-orange before:from-white',
        variant === 'secondary' &&
          'bg-white text-black border-gray-200 border before:from-gray-500'
      )}
    >
      {children}
    </button>
  )
}
