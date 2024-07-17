import Image from 'next/image'
import { Button } from './components/Button'
import logo from './logo.svg'
import { ShowcaseProject } from './components/showcase-project'
import { StrengthsBlock } from './components/strenghts'
import { WhyUsBlock } from './components/why-us'
import { ListIcon } from './components/list-icon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className='px-8 md:p-0 max-w-4xl mx-auto mb-24'>
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
        <div className='bg-neutral-900 rounded-xl border border-neutral-500 min-h-40 md:p-4 p-2 shadow-xl'>
          <div className='bg-neutral-800 rounded-lg text-white p-4 md:p-10 border border-neutral-700'>
            <h2 className='font-display font-medium text-xl md:text-2xl'>
              From zero to one
            </h2>
            <p className='text-white/50'>Sprint to launch your MVP in days</p>
            <p className='font-display font-medium text-xl md:text-2xl  mt-6'>
              From idea to production ready mobile/web app or SaaS. Everything
              you need to bring it to life.
            </p>
            <div className='mt-6 flex flex-col gap-8 md:gap-0 md:flex-row justify-between md:items-end'>
              <p className='text-white/50'>
                Starting at{' '}
                <span className='text-white font-display font-medium text-2xl block'>
                  8,000 €
                </span>
              </p>
              <div>
                <Button variant='primary'>
                  Let&apos;s talk about your project
                </Button>
              </div>
            </div>
          </div>

          <div className='text-white/50 p-4 md:p-10 pb-8'>
            <ul className='grid-cols-1 md:grid-cols-2 grid gap-2'>
              {mvpOffer.map((item, index) => (
                <li className='flex items-center' key={index}>
                  <ListIcon className='mr-1 fill-white/50' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className='text-lg font-display font-medium my-8 text-neutral-400'>
          questions people <span className='text-black'>ask frequently</span>{' '}
          about this offer
        </h2>

        <Accordion
          type='single'
          collapsible
          className='w-full flex flex-col gap-2 text-left'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              What sets your development process apart?
            </AccordionTrigger>
            <AccordionContent>
              We&apos;e not just another code factory. Our approach combines
              strategic thinking with rapid execution. We work closely with you
              to refine your app idea, ensuring it solves a specific problem
              exceptionally well. Our collaborative process involves you in key
              decisions, resulting in an app that not only meets but exceeds
              your expectations, setting a solid foundation for future growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>
              What&apos;s included in your Zero to one package?
            </AccordionTrigger>
            <AccordionContent>
              Our all-inclusive service transforms your app idea from concept to
              reality in just 4 weeks. It covers end-to-end product design,
              backend and frontend development, and launch preparation. By the
              end of our sprint, you&apos;ll have a fully functional app ready
              to onboard users and start generating revenue.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger>
              How do you kick off the project?
            </AccordionTrigger>
            <AccordionContent>
              We begin with a deep-dive session to understand your vision and
              requirements. Within 48 hours, we&apos;ll present you with
              proposed functionality and user flows. We&apos;ll refine these
              together, ensuring you&apos;e completely satisfied with both the
              features and design direction before we start building. Throughout
              the process, we maintain constant communication via a dedicated
              Slack channel, providing daily updates on our progress.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Is it fixed price or there is some hidden fees?
            </AccordionTrigger>
            <AccordionContent>
              Our Zero to one starts at 8,000 €, which covers most standard
              projects. For apps requiring complex features or integrations,
              we&apos;ll provide a custom quote after our initial consultation.
              We believe in full transparency - any additional costs will be
              discussed and agreed upon before we begin work.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-5'>
            <AccordionTrigger>
              What kind of post-launch support do you provide?
            </AccordionTrigger>
            <AccordionContent>
              We don&apos;t disappear after launch. You&apos;ll receive a
              complimentary 14-day support window, including one iteration cycle
              at no extra cost. While most of our clients find this sufficient
              (thanks to our thorough pre-launch approval process), we&apos;re
              here if you need us. Beyond this, we offer flexible ongoing
              support packages tailored to your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-6'>
            <AccordionTrigger>Who owns the app after launch?</AccordionTrigger>
            <AccordionContent>
              You do, 100%. All intellectual property rights are transferred to
              you upon completion. We offer flexible options for app management
              post-launch. We can handle publication and maintenance using our
              developer accounts, allowing you to focus on business growth.
              Alternatively, we can transfer all assets to your accounts for
              direct control. We&apos;e committed to setting you up for success,
              whichever path you choose.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-7'>
            <AccordionTrigger>what stack do you use ?</AccordionTrigger>
            <AccordionContent>
              Our team is versatile and experienced across a wide range of
              technologies and platforms. However, we specialize in react &
              nextjs for web development and react native for mobile. For
              efficiency and speed, we prefer to stick to what we know best to
              offer you the best experience possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
