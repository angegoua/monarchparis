import Image from 'next/image'
import { Button } from './components/Button'
import logo from './logo.svg'
import { ShowcaseProject } from './components/showcase-project'

export default function Home() {
  return (
    <main>
      <section className='min-h-screen flex flex-col justify-center mb-xl max-w-lg mx-auto gap-24 pb-36'>
        <Image src={logo} width={30} height={30} alt="Studio's logo" />
        <div>
          <h1 className='text-3xl font-display leading-tight text-neutral-400'>
            We help founders and early-stage startup crafting{' '}
            <span className='text-black'>irresistible</span> products
          </h1>
          <p className='my-6  max-w-md'>
            From clarify your strategy, to develivering memorables digital
            experiences that activate and retain your users.
          </p>
          <div>
            <Button variant='secondary'>Get in touch</Button>
          </div>
        </div>
      </section>

      <section id='works' className='max-w-4xl mx-auto'>
        <div className='flex flex-col gap-8 mb-32'>
          {Array.from({ length: 2 }).map((_, index) => (
            <ShowcaseProject key={index} />
          ))}
        </div>

        <div className='flex flex-col gap-8 mb-16'>
          {Array.from({ length: 3 }).map((_, index) => (
            <ShowcaseProject key={index} />
          ))}
        </div>

        <div className='flex flex-col gap-8 mb-16'>
          {Array.from({ length: 1 }).map((_, index) => (
            <ShowcaseProject key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
