import {
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
  Accordion,
} from '@/components/ui/accordion'
import React from 'react'

export const Faq = () => {
  return (
    <>
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
            strategic thinking with rapid execution. We work closely with you to
            refine your app idea, ensuring it solves a specific problem
            exceptionally well. Our collaborative process involves you in key
            decisions, resulting in an app that not only meets but exceeds your
            expectations, setting a solid foundation for future growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger>
            What&apos;s included in your Zero to one package?
          </AccordionTrigger>
          <AccordionContent>
            Our all-inclusive service transforms your app idea from concept to
            reality in just 4 weeks. It covers end-to-end product design,
            backend and frontend development, and launch preparation. By the end
            of our sprint, you&apos;ll have a fully functional app ready to
            onboard users and start generating revenue.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger>How do you kick off the project?</AccordionTrigger>
          <AccordionContent>
            We begin with a deep-dive session to understand your vision and
            requirements. Within 48 hours, we&apos;ll present you with proposed
            functionality and user flows. We&apos;ll refine these together,
            ensuring you&apos;e completely satisfied with both the features and
            design direction before we start building. Throughout the process,
            we maintain constant communication via a dedicated Slack channel,
            providing daily updates on our progress.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-4'>
          <AccordionTrigger>
            Is it fixed price or there is some hidden fees?
          </AccordionTrigger>
          <AccordionContent>
            Our Zero to one starts at 8,000 €, which covers most standard
            projects. For apps requiring complex features or integrations,
            we&apos;ll provide a custom quote after our initial consultation. We
            believe in full transparency - any additional costs will be
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
            here if you need us. Beyond this, we offer flexible ongoing support
            packages tailored to your needs.
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
            technologies and platforms. However, we specialize in react & nextjs
            for web development and react native for mobile. For efficiency and
            speed, we prefer to stick to what we know best to offer you the best
            experience possible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
