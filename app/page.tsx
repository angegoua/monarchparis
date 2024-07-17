import Image from 'next/image'
import { Button } from './components/Button'
import logo from './logo.svg'
import { ShowcaseProject } from './components/showcase-project'
import { StrengthsBlock } from './components/strenghts'
import { WhyUsBlock } from './components/why-us'
import { ListIcon } from './components/list-icon'

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto'>
      <section className='min-h-screen flex flex-col justify-center mb-xl max-w-lg mx-auto gap-24 pb-36'>
        <Image src={logo} width={30} height={30} alt="Studio's logo" />
        <div className='max-w-lg'>
          <h1 className='text-3xl font-display leading-tight text-neutral-400 font-medium'>
            We help founders and early-stage startup crafting{' '}
            <span className='text-black'>irresistible</span> products
          </h1>
          <p className='my-6 text-neutral-500 max-w-md'>
            From clarify your strategy, to develivering memorables digital
            experiences that activate and retain your users.
          </p>
          <div>
            <Button variant='secondary'>Get in touch</Button>
          </div>
        </div>
      </section>

      <section id='works'>
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
      <section className='max-w-2xl mx-auto py-64 min-h-screen'>
        <StrengthsBlock />
      </section>

      <section className='max-w-2xl mx-auto pb-64'>
        <WhyUsBlock />
      </section>

      <section className='max-w-2xl mx-auto'>
        <h2 className='text-2xl font-display mb-12 font-medium'>
          <span className='text-neutral-400 '>à la</span> carte
        </h2>
        <div className='bg-neutral-900 rounded-xl border border-neutral-500 min-h-40 p-4'>
          <div className='bg-neutral-800 rounded-lg text-white p-10 border border-neutral-700'>
            <h2 className='font-display font-medium text-2xl'>
              From zero to one
            </h2>
            <p className='text-white/50'>Sprint to launch your MVP in days</p>
            <p className='font-display font-medium text-2xl mt-6'>
              From idea to production ready mobile/web app or SaaS. Everything
              you need to bring it to life.
            </p>
            <div className='mt-6 flex justify-between items-end'>
              <p className='text-white/50'>
                Starting at{' '}
                <span className='text-white font-display font-medium text-2xl block'>
                  8000 €
                </span>
              </p>
              <div>
                <Button variant='primary'>
                  Let&apos;s talk about your project
                </Button>
              </div>
            </div>
          </div>

          <div className='text-white/50 p-10 pb-8'>
            <ul className='grid-cols-2 grid gap-2'>
              {mvpOffer.map((item, index) => (
                <li className='flex items-center' key={index}>
                  <ListIcon className='mr-1 fill-white/50' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

const mvpOffer = [
  'landing page',
  'app design (web or mobile)',
  'branding',
  'frontend & backend development',
  'discovery & strategy session',
  'dedicated slack channel',
]
