import Image from 'next/image'
import React from 'react'

export const ShowcaseProject = ({ src }: { src?: string }) => {
  return (
    <div className='flex items-center justify-center border rounded-lg border-gray-100 bg-gray-50 p-16'>
      <Image
        src='/images/projects/tc-scrnsht.jpg'
        width={1440}
        height={950}
        alt='Trouvechap project screenshot'
      />
    </div>
  )
}
