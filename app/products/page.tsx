import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EnquiryModalProvider } from '@/components/contact/enquiry-modal-context'
import { ProductSubcategoryCard } from '@/components/products/product-subcategory-card'
import { ProductsCustomizationCta } from '@/components/products/customization-cta'
import {
  PRODUCT_CATEGORIES,
  getSubcategoryGroups,
} from '@/lib/products-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our product catalogue - fiber mannequins, dress forms, hangers, carry bags, clothing stands, EAS systems, and more retail display solutions.',
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
          Browse our range of retail display solutions. Select a category to view
          subcategories and options.
        </p>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to category">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`#${category.slug}`}
              className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:ring-slate-300"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="mt-12 space-y-16">
          {PRODUCT_CATEGORIES.map((category) => {
            const groups = getSubcategoryGroups(category)
            return (
              <section
                key={category.id}
                id={category.slug}
                className="scroll-mt-24"
                aria-labelledby={`heading-${category.slug}`}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                  {category.image && (
                    <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-48">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 192px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h2
                    id={`heading-${category.slug}`}
                    className="font-display text-2xl font-semibold text-charcoal sm:text-3xl"
                  >
                    {category.name}
                  </h2>
                </div>
                <div className="mt-6 space-y-10">
                  {groups.map((group) => (
                    <div key={group.groupName}>
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {group.groupName}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
                        {group.items.map((item) => (
                          <ProductSubcategoryCard
                            key={`${group.groupName}-${item.label}`}
                            categorySlug={category.slug}
                            categoryName={category.name}
                            item={item}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <ProductsCustomizationCta />
      </div>
    </section>
    </EnquiryModalProvider>
  )
}
