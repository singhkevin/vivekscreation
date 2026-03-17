import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EnquiryModalProvider } from '@/components/contact/enquiry-modal-context'
import { ProductsCustomizationCta } from '@/components/products/customization-cta'
import { PRODUCT_CATEGORIES } from '@/lib/products-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Retail display products in Bangalore and pan India: fiber mannequins, dress forms, hangers, carry bags, clothing stands, EAS systems. Browse our catalogue and get a quote.',
}

export default function ProductsPage() {
  return (
    <EnquiryModalProvider>
      <section className="bg-beige px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-content">
          <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Product Catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Choose a category to view subcategories and options.
          </p>
          <p className="mt-4 max-w-2xl text-slate-600">
            We supply mannequins, hangers, dress forms, display systems and
            retail accessories from Bangalore to stores and brands across
            Karnataka and pan India. Request a quote for bulk orders or custom
            requirements.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {category.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] w-full bg-slate-100" />
                )}
                <div className="p-4">
                  <span className="font-semibold text-charcoal group-hover:text-accent">
                    {category.name}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-accent">
                    View category →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <ProductsCustomizationCta />
        </div>
      </section>
    </EnquiryModalProvider>
  )
}
