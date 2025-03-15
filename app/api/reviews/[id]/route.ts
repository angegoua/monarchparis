import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Mettre à jour une review (par exemple, changer son statut)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const { status } = body

    // Validation
    if (!status) {
      return NextResponse.json({ error: 'Status is required' }, { status: 400 })
    }

    // Vérifier que le statut est valide
    const validStatuses = ['pending', 'approved', 'rejected', 'featured']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      )
    }

    // Mettre à jour la review
    const updatedReview = await prisma.review.update({
      where: { id },
      data: { status },
    })

    // Convertir les dates en chaînes de caractères
    const reviewWithStringDates = {
      ...updatedReview,
      createdAt: updatedReview.createdAt.toISOString(),
      updatedAt: updatedReview.updatedAt.toISOString(),
    }

    return NextResponse.json(reviewWithStringDates)
  } catch (error) {
    console.error('Error updating review:', error)
    return NextResponse.json(
      { error: 'Error updating review' },
      { status: 500 }
    )
  }
}

// Supprimer une review
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Supprimer la review
    await prisma.review.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Review deleted successfully' })
  } catch (error) {
    console.error('Error deleting review:', error)
    return NextResponse.json(
      { error: 'Error deleting review' },
      { status: 500 }
    )
  }
}
