import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { MobileNavMenu } from '@/components/layout/mobile-nav-menu'
import { ProductsMegaMenu } from '@/components/layout/products-mega-menu'

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
          {NAV_LINKS.map((link) =>
            link.href === '/products' ? (
              <ProductsMegaMenu key={link.href} />
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white active:bg-white/5 active:text-white focus-visible:bg-white/5 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="md:hidden">
          <MobileNavMenu links={NAV_LINKS} />
        </div>
      </nav>
    </header>
  )
}
