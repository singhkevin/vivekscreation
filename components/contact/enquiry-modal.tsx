'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { InquiryForm } from './inquiry-form'

type EnquiryModalProps = {
  isOpen: boolean
  onClose: () => void
  initialCategory?: string
  initialMessage?: string
}

export function EnquiryModal({
  isOpen,
  onClose,
  initialCategory,
  initialMessage,
}: EnquiryModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        tabIndex={0}
        role="button"
        aria-label="Close modal"
      />
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="enquiry-modal-title"
            className="font-display text-xl font-semibold text-charcoal"
          >
            Get a Quote
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="mb-5 text-sm text-slate-600">
          Tell us about your requirements and we will get back soon.
        </p>
        <InquiryForm
          initialCategory={initialCategory}
          initialMessage={initialMessage}
          onSuccess={onClose}
        />
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
