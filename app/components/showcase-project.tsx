'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Drawer } from './drawer'
import type { Project } from '@/lib/projects'
import { useDrawerContext } from '@/lib/drawer-context'

export const ShowcaseProject = ({ project }: { project: Project }) => {
  const { isOpen, setIsOpen } = useDrawerContext()

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className='group'>
      <Drawer isOpen={isOpen} project={project} />

      <button className='rounded-lg' onClick={() => setIsOpen(true)}>
        <div className='flex items-center p-0 md:p-4 justify-center group-hover:bg-gray-100 transition-colors duration-300 rounded-lg'>
          <Image
            className='rounded-lg border border-gray-200 object-cover transition-all duration-300 ease-in-out'
            src={project.images[0].src}
            width={1440}
            height={950}
            alt={project.name}
          />
        </div>

        <div className='flex flex-col justify-start items-start px-0 pt-4 md:p-4'>
          <p className='text-neutral-500'>{project.type}</p>
          <h2 className='text-xl font-display font-medium'>{project.name}</h2>
        </div>
      </button>
    </div>
  )
}
