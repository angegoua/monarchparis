import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, rating = 5, comment, improvements } = body

    // Validation
    if (!name || !email || !company || !comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create review - en séparant les champs pour éviter les erreurs si improvements n'est pas reconnu
    const reviewData: any = {
      name,
      email,
      company,
      rating: rating || 5,
      comment,
    }

    // Ajouter improvements seulement s'il est défini
    if (improvements !== undefined) {
      reviewData.improvements = improvements
    }

    const review = await prisma.review.create({
      data: reviewData,
    })

    // Convertir les dates en chaînes de caractères
    const reviewWithStringDates = {
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    }

    return NextResponse.json(reviewWithStringDates, { status: 201 })
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json(
      { error: 'Error creating review' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    // Récupérer les paramètres de requête
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    // Construire la requête avec des filtres optionnels
    const where: any = {}

    // Filtrer par statut si spécifié
    if (status) {
      where.status = status
    }

    const reviews = await prisma.review.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Convertir les dates en chaînes de caractères
    const reviewsWithStringDates = reviews.map((review) => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
    }))

    return NextResponse.json(reviewsWithStringDates)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: 'Error fetching reviews' },
      { status: 500 }
    )
  }
}
