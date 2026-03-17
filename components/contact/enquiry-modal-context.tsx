'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { EnquiryModal } from './enquiry-modal'

type EnquiryContextValue = {
  openEnquiryModal: (options?: {
    category?: string
    subcategory?: string
  }) => void
}

const EnquiryModalContext = createContext<EnquiryContextValue | null>(null)

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialCategory, setInitialCategory] = useState('')
  const [initialMessage, setInitialMessage] = useState('')

  const openEnquiryModal = useCallback(
    (options?: { category?: string; subcategory?: string }) => {
      if (options?.category) setInitialCategory(options.category)
      else setInitialCategory('')
      if (options?.category && options?.subcategory) {
        setInitialMessage(`Interested in: ${options.category} - ${options.subcategory}`)
      } else if (options?.category) {
        setInitialMessage(`Interested in: ${options.category}`)
      } else {
        setInitialMessage('')
      }
      setIsOpen(true)
    },
    []
  )

  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal }}>
      {children}
      <EnquiryModal
        isOpen={isOpen}
        onClose={closeModal}
        initialCategory={initialCategory || undefined}
        initialMessage={initialMessage || undefined}
      />
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal(): EnquiryContextValue {
  const ctx = useContext(EnquiryModalContext)
  if (!ctx) {
    return {
      openEnquiryModal: () => {
        window.location.href = '/contact#inquiry-form'
      },
    }
  }
  return ctx
}
