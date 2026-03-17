import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EnquiryModalProvider } from '@/components/contact/enquiry-modal-context'
import { ProductSubcategoryCard } from '@/components/products/product-subcategory-card'
import { ProductsCustomizationCta } from '@/components/products/customization-cta'
import {
  getCategoryBySlug,
  getSubcategoryGroups,
  PRODUCT_CATEGORY_SLUGS,
} from '@/lib/products-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Products' }
  return {
    title: `${category.name} in Bangalore & Pan India | Products`,
    description: `Buy ${category.name} from Vivek's Creation, Bangalore. We supply ${category.name.toLowerCase()} to retailers across Karnataka and pan India. View options and get a quote.`,
  }
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const groups = getSubcategoryGroups(category)

  return (
    <EnquiryModalProvider>
      <section className="bg-beige px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-content">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-charcoal"
          >
            <span aria-hidden>←</span> Back to Products
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            {category.image && (
              <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-32 sm:w-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div>
              <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-2 max-w-2xl text-slate-600">
                Browse subcategories and options below. We supply {category.name.toLowerCase()} from
                Bangalore to retailers across Karnataka and pan India. Use
                Enquire now for a quote.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-10">
            {groups.map((group) => (
              <div key={group.groupName}>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {group.groupName}
                </h2>
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

          <ProductsCustomizationCta />
        </div>
      </section>
    </EnquiryModalProvider>
  )
}
