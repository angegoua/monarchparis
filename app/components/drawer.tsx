'use client'
import { Project } from '@/lib/projects'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { useDrawerContext } from '@/lib/drawer-context'

export const Drawer = ({
  isOpen,
  project,
}: {
  isOpen: boolean
  project: Project
}) => {
  const { setIsOpen } = useDrawerContext()

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='h-screen w-screen fixed inset-0 z-40 pt-48 overflow-scroll bg-gray-50'>
          <div className='z-50 p-2 max-w-2xl mx-auto fixed top-0 left-[50%] -translate-x-[50%] w-full flex justify-center'>
            <motion.div
              key={project.id}
              className='w-full'
              initial={{ y: '-300%' }}
              animate={{ y: 0 }}
              exit={{ y: '-300%' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className='flex justify-between w-full border border-gray-200 bg-white/20 p-2 rounded-full backdrop-blur-xl'>
                <Link
                  target='_blank'
                  href='https://cal.com/ange-monarchparis/discovery'
                >
                  <Button variant='primary'>
                    Let&apos;s talk about your project
                  </Button>
                </Link>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant='secondary'
                  className='text-neutral-500 flex justify-center items-center h-10 w-10 px-2 py-2 rounded-full'
                >
                  <X size={24} />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: '100px', opacity: 0 }}
            animate={{
              y: '0px',
              opacity: 1,
            }}
            exit={{ y: '100px', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className='max-w-6xl mx-auto px-4 md:p-0 mb-32'>
              <div className='max-w-2xl mx-auto'>
                <h1 className='text-3xl font-display font-medium'>
                  {project.name}
                </h1>
                <p className='text-neutral-500 mt-4'>{project.description}</p>
              </div>

              <div className='mt-32'>
                {project.images.map((image) => (
                  <div key={image.src}>
                    <Image
                      className='rounded-lg border border-gray-200 mt-8 md:mt-16'
                      src={image.src}
                      width={1440}
                      height={950}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
