import { BRANDS } from '@/lib/constants'
import { BrandLogo } from '@/components/home/brand-logo'

export function BrandLogos() {
  return (
    <section
      style={{
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
        padding: '48px 16px',
        backgroundColor: '#F8F5ED',
      }}
      aria-label="Trusted by leading brands"
    >
      <div className="mx-auto max-w-content px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
          Trusted by leading retail brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {BRANDS.map((brand) => (
            <div
              key={brand.slug}
              className="flex h-14 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 transition-colors hover:border-red-600 sm:h-16"
            >
              <BrandLogo brand={brand} variant="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
