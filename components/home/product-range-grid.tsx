import Link from 'next/link'
import { PRODUCT_RANGE_GRID } from '@/lib/products-data'

export function ProductRangeGrid() {
  return (
    <section
      style={{ padding: '64px 16px', backgroundColor: '#F8F5ED' }}
      aria-labelledby="product-range-heading"
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          id="product-range-heading"
          className="text-3xl font-semibold sm:text-4xl"
          style={{ color: '#333333' }}
        >
          Our Product Range
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          Explore our comprehensive range of retail display solutions and
          accessories for your store.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCT_RANGE_GRID.map((item) => (
            <Link
              key={item.slug}
              href={`/products#${item.slug}`}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white text-left transition-all hover:border-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              {item.image ? (
                <div
                  style={{ aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#F0F0F0' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : null}
              <div className="p-4">
                <span
                  className="font-medium group-hover:text-red-600"
                  style={{ color: '#333333' }}
                >
                  {item.name}
                </span>
                <span
                  className="mt-2 flex items-center justify-between text-sm font-medium"
                  style={{ color: '#D93025' }}
                >
                  View Product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
