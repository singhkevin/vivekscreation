import { BRANDS } from '@/lib/constants'
import { BrandLogo } from '@/components/home/brand-logo'

export function OurClients() {
  return (
    <section
      className="bg-beige px-4 py-16 sm:py-20"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="clients-heading"
          className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
        >
          Our Clients
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Trusted by leading fashion and retail brands across India.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {BRANDS.map((brand) => (
            <div
              key={brand.slug}
              className="flex h-14 min-w-[100px] items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 sm:h-16"
            >
              <BrandLogo brand={brand} variant="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
