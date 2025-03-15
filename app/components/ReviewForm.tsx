import React, { useState } from 'react'
import { Button } from './Button'

interface ReviewFormProps {
  onSuccess?: () => void
}

export const ReviewForm = ({ onSuccess }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rating: 5,
    comment: '',
    improvements: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Something went wrong')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        rating: 5,
        comment: '',
        improvements: '',
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full max-w-2xl mx-auto'>
      {success ? (
        <div className='bg-green-50 p-6 rounded-lg text-center'>
          <h3 className='text-xl font-medium text-green-800 mb-2'>
            Thank you for your review!
          </h3>
          <p className='text-green-700 mb-4'>
            Your feedback is greatly appreciated.
          </p>
          {/* <Button variant='secondary' onClick={() => setSuccess(false)}>
            Submit another review
          </Button> */}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-6'>
          {error && (
            <div className='bg-red-50 p-4 rounded-md'>
              <p className='text-red-700'>{error}</p>
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email (it will stay private) *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Project we work together on *
            </label>
            <input
              type='text'
              id='company'
              name='company'
              required
              value={formData.company}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
            />
          </div>

          <div>
            <label
              htmlFor='comment'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              What did you like about our collaboration? *
            </label>
            <textarea
              id='comment'
              name='comment'
              required
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
              placeholder='Talk about the project, the process, the results, etc.'
            />
          </div>

          <div>
            <label
              htmlFor='improvements'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              What could we improve? (optional)
            </label>
            <textarea
              id='improvements'
              name='improvements'
              rows={4}
              value={formData.improvements}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
              placeholder='Any suggestions for how we could improve our service?'
            />
          </div>

          <div className='flex justify-end'>
            <Button
              variant='primary'
              className='w-full md:w-auto'
              type='submit'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
