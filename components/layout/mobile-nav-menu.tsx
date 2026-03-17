'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { NAV_LINKS } from '@/lib/constants'
import { PRODUCT_CATEGORIES } from '@/lib/products-data'

type NavLink = (typeof NAV_LINKS)[number]

type MobileNavMenuProps = {
  links: readonly NavLink[]
  onNavigate?: () => void
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function MobileNavMenu({ links, onNavigate }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false)
  const [productsExpanded, setProductsExpanded] = useState(false)

  const handleToggle = () => setOpen((prev) => !prev)
  const handleClose = () => {
    setOpen(false)
    setProductsExpanded(false)
  }
  const handleNavigate = () => {
    onNavigate?.()
    handleClose()
  }
  const handleProductsToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setProductsExpanded((prev) => !prev)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-transparent text-white transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[56px] z-40 border-t border-white/10 backdrop-blur-xl md:hidden"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}
        >
          <ul className="flex list-none flex-col gap-0 px-4 py-4">
            {links.map((link) => {
              if (link.href === '/products') {
                return (
                  <li key={link.href}>
                    <div className="py-1">
                      <button
                        type="button"
                        onClick={handleProductsToggle}
                        aria-expanded={productsExpanded}
                        aria-controls="mobile-products-submenu"
                        className="flex w-full items-center justify-between rounded-md border border-white/30 bg-transparent py-3 px-3 text-left text-base font-medium text-white transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      >
                        Products
                        <ChevronDown
                          className="h-5 w-5 shrink-0 transition-transform"
                          aria-hidden
                          style={{ transform: productsExpanded ? 'rotate(180deg)' : undefined }}
                        />
                      </button>
                      <ul
                        id="mobile-products-submenu"
                        role="menu"
                        className="list-none pl-0"
                        hidden={!productsExpanded}
                      >
                        <li>
                          <Link
                            href="/products"
                            onClick={handleNavigate}
                            className="block py-2 pl-6 pr-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white focus-visible:bg-white/5 focus-visible:text-white"
                          >
                            View all products
                          </Link>
                        </li>
                        {PRODUCT_CATEGORIES.map((category) => (
                          <li key={category.id}>
                            <Link
                              href={`/products/${category.slug}`}
                              role="menuitem"
                              onClick={handleNavigate}
                              className="block py-2 pl-6 pr-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white focus-visible:bg-white/5 focus-visible:text-white"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              }
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavigate}
                    className="block rounded-md py-3 px-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white focus-visible:bg-white/5 focus-visible:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
