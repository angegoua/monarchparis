import Image from 'next/image'
import React from 'react'

export const ShowcaseProject = ({ src }: { src?: string }) => {
  return (
    <div className='flex items-center justify-center border rounded-lg border-gray-200 bg-gray-50 p-4 md:p-16 relative'>
      <p className='absolute -bottom-10 text-neutral-500'>
        works will be displayed soon
      </p>
      <Image
        src='/images/projects/tc-scrnsht.jpg'
        width={1440}
        height={950}
        alt='Trouvechap project screenshot'
        className='blur-lg select-none event-none'
      />
    </div>
  )
}
