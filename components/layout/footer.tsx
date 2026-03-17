import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE_NAME, NAV_LINKS, CONTACT } from '@/lib/constants'
import { PRODUCT_CATEGORIES } from '@/lib/products-data'

const USEFUL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        marginTop: 'auto',
        backgroundColor: '#222222',
        color: '#e5e7eb',
      }}
    >
      <div
        style={{ maxWidth: 1280, margin: '0 auto' }}
        className="grid gap-8 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-5"
      >
        <div>
          <Link href="/" className="block w-fit no-underline">
            <img
              src="/images/logo.png"
              alt={SITE_NAME}
              width={140}
              height={42}
              style={{ height: 36, width: 'auto' }}
            />
          </Link>
          <p className="mt-3 text-sm" style={{ color: '#9ca3af' }}>
            &copy; {currentYear} {SITE_NAME}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9ca3af' }}>
            Our Links
          </h3>
          <ul className="mt-4 list-none space-y-2 pl-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm no-underline hover:text-white"
                  style={{ color: '#d1d5db' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9ca3af' }}>
            Products
          </h3>
          <ul className="mt-4 list-none space-y-2 pl-0">
            <li>
              <Link
                href="/products"
                className="text-sm no-underline hover:text-white"
                style={{ color: '#d1d5db' }}
              >
                All Products
              </Link>
            </li>
            {PRODUCT_CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products/${category.slug}`}
                  className="text-sm no-underline hover:text-white"
                  style={{ color: '#d1d5db' }}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9ca3af' }}>
            Useful Links
          </h3>
          <ul className="mt-4 list-none space-y-2 pl-0">
            {USEFUL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm no-underline hover:text-white"
                  style={{ color: '#d1d5db' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9ca3af' }}>
            Contact
          </h3>
          <ul className="mt-4 list-none space-y-3 pl-0">
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm no-underline hover:text-white"
                style={{ color: '#d1d5db' }}
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm no-underline hover:text-white"
                style={{ color: '#d1d5db' }}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#d1d5db' }} aria-hidden />
              <span className="text-sm" style={{ color: '#d1d5db' }}>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t px-4 py-6 sm:px-6 lg:px-8"
        style={{ borderColor: '#374151' }}
      >
        <p className="text-center text-sm" style={{ color: '#9ca3af' }}>
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </p>
        <p className="mt-2 text-center text-sm" style={{ color: '#9ca3af' }}>
          Made with ❤ by{' '}
          <a
            href="https://viralinbound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-white"
            style={{ color: '#d1d5db' }}
          >
            Viral Inbound
          </a>
        </p>
      </div>
    </footer>
  )
}
