'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PRODUCT_CATEGORIES } from '@/lib/products-data'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type InquiryFormProps = {
  initialCategory?: string
  initialMessage?: string
  onSuccess?: () => void
}

export function InquiryForm({
  initialCategory = '',
  initialMessage = '',
  onSuccess,
}: InquiryFormProps = {}) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    category: initialCategory,
    phone: '',
    email: '',
    message: initialMessage,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to submit')

      setStatus('success')
      setFormData({ name: '', companyName: '', category: '', phone: '', email: '', message: '' })
      onSuccess?.()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
        role="alert"
      >
        <p className="font-medium text-green-800">
          Thank you for your inquiry. We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
      aria-label="Send inquiry"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-charcoal"
        >
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your company"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-charcoal"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Select category (optional)</option>
          {PRODUCT_CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal"
        >
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-2.5 text-charcoal placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Tell us about your requirements..."
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
