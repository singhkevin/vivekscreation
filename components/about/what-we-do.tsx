import Link from 'next/link'

const CATEGORIES = [
  'Mannequins',
  'Hangers',
  'Clothing Racks',
  'Store Display Systems',
  'Packaging',
  'Retail Accessories',
]

export function WhatWeDo() {
  return (
    <section
      className="bg-beige px-4 py-16 sm:py-20"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="what-we-do-heading"
          className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
        >
          What We Do
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          We design and manufacture a comprehensive range of retail display
          solutions for fashion and retail businesses.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-slate-200 bg-white px-6 py-4"
            >
              <span className="font-medium text-charcoal">{category}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            View full product catalogue →
          </Link>
        </div>
      </div>
    </section>
  )
}
