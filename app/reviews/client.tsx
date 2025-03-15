'use client'

import React, { useState, useEffect } from 'react'
import { ReviewForm } from '../components/ReviewForm'

interface Review {
  id: string
  name: string
  company: string | null
  rating: number
  comment: string
  createdAt: string
}

export default function ReviewsClient({
  initialReviews,
}: {
  initialReviews: Review[]
}) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [isLoading, setIsLoading] = useState(false)

  const fetchReviews = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/reviews')
      if (!response.ok) {
        throw new Error('Failed to fetch reviews')
      }
      const data = await response.json()
      setReviews(data)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className='min-h-[50vh] flex flex-col justify-center mb-xl max-w-2xl mx-auto gap-8 py-16'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-display leading-tight text-black font-medium mb-4'>
            Client Reviews
          </h1>
          <p className='text-neutral-500 max-w-md mx-auto'>
            We value your feedback on our collaboration. Please share your
            experience working with us on your project.
          </p>
        </div>

        <ReviewForm onSuccess={fetchReviews} />
      </section>
    </>
  )
}
