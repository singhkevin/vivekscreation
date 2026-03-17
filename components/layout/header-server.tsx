import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

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

export function HeaderServer() {
  return (
    <header
      className="backdrop-blur-xl"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}
    >
      <nav
        style={{ maxWidth: 1280, margin: '0 auto' }}
        className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <img
            src="/images/logo.png"
            alt="Vivek's Creation"
            width={160}
            height={48}
            style={{ height: 36, width: 'auto' }}
          />
        </Link>

        <ul className="hidden list-none items-center gap-1 pl-0 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white hover:bg-white/10 rounded-md"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <details className="group relative md:hidden [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden">
          <summary
            className="flex cursor-pointer list-none appearance-none items-center justify-center w-10 h-10 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-colors select-none"
            aria-label="Toggle menu"
            tabIndex={0}
          >
            <span className="flex group-open:hidden" aria-hidden><MenuIcon /></span>
            <span className="hidden group-open:flex" aria-hidden><CloseIcon /></span>
          </summary>
          <div
            className="fixed inset-x-0 top-[56px] z-40 border-t border-white/10 shadow-xl backdrop-blur-xl md:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <ul className="flex list-none flex-col gap-0 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-3 text-base font-medium text-white/90 rounded-md transition-colors hover:text-white hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </nav>
    </header>
  )
}
