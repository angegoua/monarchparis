import React from 'react'
import ReviewsClient from './client'
import prisma from '@/lib/prisma'

async function getReviews() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Convertir les dates en chaînes de caractères pour correspondre à l'interface Review
    return reviews.map((review) => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    }))
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <main className='px-4 md:p-0 max-w-4xl mx-auto mb-24'>
      <ReviewsClient initialReviews={reviews} />
    </main>
  )
}
