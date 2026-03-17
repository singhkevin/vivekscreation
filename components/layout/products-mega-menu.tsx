'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '@/lib/products-data'

export function ProductsMegaMenu() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100)
  }

  return (
    <li
      className="group relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocusWithin={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          timeoutRef.current = setTimeout(() => setOpen(false), 150)
        }
      }}
    >
      <Link
        href="/products"
        className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white focus:outline-none focus-visible:bg-white/5 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/40"
      >
        Products
        <ChevronDown
          className="h-4 w-4 transition-transform"
          aria-hidden
          style={{ transform: open ? 'rotate(180deg)' : undefined }}
        />
      </Link>

      <div
        role="menu"
        aria-label="Product categories"
        aria-hidden={!open}
        inert={open ? undefined : ''}
        className="absolute left-1/2 top-full z-50 w-[min(90vw,42rem)] -translate-x-1/2 rounded-xl border border-white/10 pt-1 shadow-2xl transition-opacity duration-150 md:w-[42rem]"
        style={{
          backgroundColor: 'rgba(0,0,0,0.92)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="border-b border-white/10 px-5 py-3">
          <Link
            href="/products"
            className="text-sm font-semibold text-white transition-colors hover:text-white/80"
          >
            View all products →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              role="menuitem"
              className="group/item flex flex-col overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-white/20 hover:bg-white/5"
            >
              {category.image ? (
                <div className="relative aspect-[4/3] w-full shrink-0 bg-white/5">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 150px"
                    className="object-cover opacity-90 transition-opacity group-hover/item:opacity-100"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] w-full shrink-0 bg-white/5" />
              )}
              <span className="p-2.5 text-sm font-medium text-white/95 group-hover/item:text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </li>
  )
}
