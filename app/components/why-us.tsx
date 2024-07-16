'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

interface TextSegment {
  text: string
  isLink?: boolean
  href?: string
}

const AnimatedText = ({
  segments,
  wordStartIndex,
  totalWords,
}: {
  segments: TextSegment[]
  wordStartIndex: number
  totalWords: number
}) => {
  return (
    <p className='mb-6'>
      {segments.flatMap((segment, segIndex) =>
        segment.text.split(' ').map((word, wordIndex) => (
          <Word
            key={`${segIndex}-${wordIndex}`}
            wordIndex={wordStartIndex + wordIndex}
            totalWords={totalWords}
            isLink={segment.isLink}
            href={segment.href}
          >
            {word}
          </Word>
        ))
      )}
    </p>
  )
}

const Word = ({
  children,
  wordIndex,
  totalWords,
  isLink,
  href,
}: {
  children: string
  wordIndex: number
  totalWords: number
  isLink?: boolean
  href?: string
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  })

  const start = wordIndex / totalWords
  const end = (wordIndex + 1) / totalWords
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

  const content = (
    <>
      <span style={{ opacity: 0.2, visibility: 'hidden' }}>{children}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {children}
      </motion.span>
      <span style={{ opacity: 0.2, position: 'absolute', left: 0, top: 0 }}>
        {children}
      </span>
    </>
  )

  return (
    <span
      ref={container}
      className='relative'
      style={{ display: 'inline-block', marginRight: '0.25em' }}
    >
      {isLink && href ? (
        <a href={href} className='hover:underline'>
          {content}
        </a>
      ) : (
        content
      )}
    </span>
  )
}

export const WhyUsBlock = () => {
  const content: TextSegment[][] = [
    [
      {
        text: "Product design & development agencies' scene has lost its way.",
      },
    ],
    [
      {
        text: "Remember when your creative and dev team felt like true partners, focused on your success? Those days of genuine collaboration have vanished, replaced by cookie-cutter code farms and agencies that vanish once they're paid. Endless delays, unanswered emails, and half-baked MVPs have become the norm.",
      },
    ],
    [{ text: "But it doesn't have to be this way." }],
    [
      {
        text: "Imagine working with a team of top notch engineers, best-in-class designers, UX wizards, and growth hackers as invested in your app's success as you are. We're not just moving pixels and writing code – we're crafting user-centric, strategic and lovable digital experiences.",
      },
    ],
    [{ text: 'Need a quick and efficient MVP?' }],
    [{ text: "We've got you covered from zero to one and beyond." }],
    [
      {
        text: 'Want to implement cutting-edge features, or need creatives to answer all your product design requests?',
      },
    ],
    [{ text: 'Easy peasy.' }],
    [
      {
        text: "We speak fluent business, translating your vision into a strategy that'll have investors salivating and users coming back for more.",
      },
    ],
    [
      {
        text: "So, let's talk about your project ↘",
        isLink: true,
        href: '#',
      },
    ],
  ]

  const totalWords = content.reduce(
    (acc, paragraph) =>
      acc +
      paragraph.reduce((segAcc, seg) => segAcc + seg.text.split(' ').length, 0),
    0
  )
  let wordStartIndex = 0

  return (
    <div className='font-display font-medium text-2xl text-neutral-500'>
      {content.map((paragraph, index) => {
        const element = (
          <AnimatedText
            key={index}
            segments={paragraph}
            wordStartIndex={wordStartIndex}
            totalWords={totalWords}
          />
        )
        wordStartIndex += paragraph.reduce(
          (acc, seg) => acc + seg.text.split(' ').length,
          0
        )
        return element
      })}
    </div>
  )
}

export default WhyUsBlock
