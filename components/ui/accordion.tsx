'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type AccordionItemProps = {
  id: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  return (
    <div
      id={id}
      className="border-b border-slate-200 last:border-b-0"
      data-accordion-item
    >
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-charcoal transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!isOpen}
        className={`overflow-hidden transition-all ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="pb-5 pt-2">{children}</div>
      </div>
    </div>
  )
}
