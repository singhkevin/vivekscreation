'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // #region agent log
    fetch('/api/debug-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: '2c0609', location: 'header:mount', message: 'Header client mount', data: {}, timestamp: Date.now(), hypothesisId: 'D,E' }),
    }).catch(() => {})
    // #endregion agent log
  }, [])

  const handleToggleMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#fff',
      }}
    >
      <nav
        style={{ maxWidth: 1280, margin: '0 auto' }}
        className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center"
          onClick={handleCloseMenu}
        >
          <img
            src="/images/logo.png"
            alt="Vivek's Creation"
            width={160}
            height={48}
            style={{ height: 40, width: 'auto' }}
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-red-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleToggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 md:hidden"
        >
          <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-gray-200 bg-white md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="flex flex-col gap-0 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleCloseMenu}
                className="block py-3 text-base font-medium text-gray-700 hover:text-red-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
