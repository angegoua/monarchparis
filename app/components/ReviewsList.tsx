import React from 'react'

interface Review {
  id: string
  name: string
  company: string | null
  rating: number
  comment: string
  createdAt: string
}

interface ReviewsListProps {
  reviews: Review[]
}

export const ReviewsList = ({ reviews }: ReviewsListProps) => {
  if (reviews.length === 0) {
    return (
      <div className='text-center py-10'>
        <p className='text-gray-500'>
          No reviews yet. Be the first to leave a review!
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-8'>
      {reviews.map((review) => (
        <div
          key={review.id}
          className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
        >
          <div className='flex justify-between items-start mb-4'>
            <div>
              <h3 className='font-medium text-lg'>{review.name}</h3>
              {review.company && (
                <p className='text-gray-500 text-sm'>{review.company}</p>
              )}
            </div>
            <div className='flex items-center'>
              <div className='flex'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <span className='ml-2 text-sm text-gray-600'>
                {review.rating}/5
              </span>
            </div>
          </div>
          <p className='text-gray-700 whitespace-pre-line'>{review.comment}</p>
          <p className='text-gray-400 text-sm mt-4'>
            {new Date(review.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      ))}
    </div>
  )
}
