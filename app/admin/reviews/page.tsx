import React from 'react'
import AdminReviewsClient from './client'
import prisma from '@/lib/prisma'

// Indiquer à Next.js de ne pas pré-rendre cette page côté serveur lors du build
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function getReviews() {
  try {
    // Vérifier si nous sommes en phase de build sur Vercel
    if (
      process.env.VERCEL_ENV === 'production' &&
      process.env.NEXT_PHASE === 'build'
    ) {
      console.log('Skipping database fetch during build phase')
      return []
    }

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

export default async function AdminReviewsPage() {
  const reviews = await getReviews()

  return (
    <main className='px-4 md:p-0 max-w-6xl mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-6'>Reviews Administration</h1>
      <AdminReviewsClient initialReviews={reviews} />
    </main>
  )
}
