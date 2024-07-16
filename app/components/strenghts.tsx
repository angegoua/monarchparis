import React from 'react'

export const StrengthsBlock = () => {
  const designDomains = [
    'branding',
    'product design',
    'user experience',
    'animation',
    'landing pages',
    'pitches decks',
  ]

  const techDomains = [
    'ai',
    'frontend',
    'backend',
    'task automation',
    'integrations',
    'cloud',
  ]

  return (
    <>
      <h2 className='text-2xl font-display mb-12 font-medium'>
        <span className='text-neutral-400 '>our signature</span> strengths
      </h2>
      <div className='flex justify-between gap-8'>
        <div className='w-1/2'>
          <HeaderIcon className='block' />
          <h3 className='text-lg font-display font-medium mt-2 mb-4'>design</h3>
          <p className='text-neutral-500 text-sm'>
            we know how to sketch for you intuitive, engaging interfaces that
            evolve with your users needs and market trends.
          </p>
          <ul className='flex items-center mt-4  flex-wrap'>
            {designDomains.map((domain, index) => (
              <li key={index} className='flex items-center mr-2'>
                <ListIcon className='mr-1' />
                <span className='text-neutral-500 text-sm'>{domain}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/2'>
          <HeaderIcon className='block' />
          <h3 className='text-lg font-display font-medium mt-2 mb-4'>
            technology
          </h3>
          <p className='text-neutral-500 text-sm'>
            we build scalable, cutting-edge tech solutions that ensure your
            systems grow with your business for long-term performance and
            adaptability.
          </p>
          <ul className='flex items-center mt-4  flex-wrap'>
            {techDomains.map((domain, index) => (
              <li key={index} className='flex items-center mr-2'>
                <ListIcon className='mr-1' />
                <span className='text-neutral-500 text-sm'>{domain}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const HeaderIcon = ({ className }: { className?: string }) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <g clip-path='url(#clip0_128_879)'>
      <path
        fill='#565656'
        d='M8.47088 1.44237C8.51029 1.33378 8.58218 1.23995 8.67678 1.17365C8.77139 1.10735 8.88411 1.07178 8.99963 1.07178C9.11515 1.07178 9.22787 1.10735 9.32247 1.17365C9.41707 1.23995 9.48897 1.33378 9.52838 1.44237L10.0661 2.91162C10.4879 4.06342 11.1557 5.10942 12.023 5.97675C12.8903 6.84408 13.9363 7.51188 15.0881 7.93362L16.5563 8.47137C16.6648 8.51078 16.7587 8.58267 16.825 8.67727C16.8913 8.77187 16.9268 8.88459 16.9268 9.00012C16.9268 9.11564 16.8913 9.22836 16.825 9.32296C16.7587 9.41756 16.6648 9.48945 16.5563 9.52887L15.0881 10.0666C13.9363 10.4884 12.8903 11.1562 12.023 12.0235C11.1557 12.8908 10.4879 13.9368 10.0661 15.0886L9.52838 16.5567C9.48897 16.6653 9.41707 16.7592 9.32247 16.8255C9.22787 16.8918 9.11515 16.9273 8.99963 16.9273C8.88411 16.9273 8.77139 16.8918 8.67678 16.8255C8.58218 16.7592 8.51029 16.6653 8.47088 16.5567L7.93313 15.0886C7.51139 13.9368 6.84359 12.8908 5.97626 12.0235C5.10894 11.1562 4.06293 10.4884 2.91113 10.0666L1.44188 9.52887C1.33329 9.48945 1.23946 9.41756 1.17316 9.32296C1.10686 9.22836 1.07129 9.11564 1.07129 9.00012C1.07129 8.88459 1.10686 8.77187 1.17316 8.67727C1.23946 8.58267 1.33329 8.51078 1.44188 8.47137L2.91113 7.93362C4.06293 7.51188 5.10894 6.84408 5.97626 5.97675C6.84359 5.10942 7.51139 4.06342 7.93313 2.91162L8.47088 1.44237Z'
      />
      <circle cx='15.9546' cy='2.04545' r='2.04545' fill='#D9D9D9' />
      <circle cx='15.9546' cy='15.9546' r='2.04545' fill='#D9D9D9' />
      <circle cx='2.04545' cy='15.9546' r='2.04545' fill='#D9D9D9' />
      <circle cx='2.04545' cy='2.04545' r='2.04545' fill='#D9D9D9' />
    </g>
    <defs>
      <clipPath id='clip0_128_879'>
        <rect width='18' height='18' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

const ListIcon = ({ className }: { className?: string }) => (
  <svg
    width='10'
    height='10'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <g clip-path='url(#clip0_128_879)'>
      <path
        fill='#565656'
        d='M8.47088 1.44237C8.51029 1.33378 8.58218 1.23995 8.67678 1.17365C8.77139 1.10735 8.88411 1.07178 8.99963 1.07178C9.11515 1.07178 9.22787 1.10735 9.32247 1.17365C9.41707 1.23995 9.48897 1.33378 9.52838 1.44237L10.0661 2.91162C10.4879 4.06342 11.1557 5.10942 12.023 5.97675C12.8903 6.84408 13.9363 7.51188 15.0881 7.93362L16.5563 8.47137C16.6648 8.51078 16.7587 8.58267 16.825 8.67727C16.8913 8.77187 16.9268 8.88459 16.9268 9.00012C16.9268 9.11564 16.8913 9.22836 16.825 9.32296C16.7587 9.41756 16.6648 9.48945 16.5563 9.52887L15.0881 10.0666C13.9363 10.4884 12.8903 11.1562 12.023 12.0235C11.1557 12.8908 10.4879 13.9368 10.0661 15.0886L9.52838 16.5567C9.48897 16.6653 9.41707 16.7592 9.32247 16.8255C9.22787 16.8918 9.11515 16.9273 8.99963 16.9273C8.88411 16.9273 8.77139 16.8918 8.67678 16.8255C8.58218 16.7592 8.51029 16.6653 8.47088 16.5567L7.93313 15.0886C7.51139 13.9368 6.84359 12.8908 5.97626 12.0235C5.10894 11.1562 4.06293 10.4884 2.91113 10.0666L1.44188 9.52887C1.33329 9.48945 1.23946 9.41756 1.17316 9.32296C1.10686 9.22836 1.07129 9.11564 1.07129 9.00012C1.07129 8.88459 1.10686 8.77187 1.17316 8.67727C1.23946 8.58267 1.33329 8.51078 1.44188 8.47137L2.91113 7.93362C4.06293 7.51188 5.10894 6.84408 5.97626 5.97675C6.84359 5.10942 7.51139 4.06342 7.93313 2.91162L8.47088 1.44237Z'
      />
    </g>
    <defs>
      <clipPath id='clip0_128_879'>
        <rect width='10' height='10' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
