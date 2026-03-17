'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEnquiryModal } from '@/components/contact/enquiry-modal-context'
import {
  getSubcategoryImageUrl,
  getSubcategoryPlaceholderUrl,
  type SubcategoryGridItem,
} from '@/lib/products-data'

type ProductSubcategoryCardProps = {
  categorySlug: string
  categoryName: string
  item: SubcategoryGridItem
}

export function ProductSubcategoryCard({
  categorySlug,
  categoryName,
  item,
}: ProductSubcategoryCardProps) {
  const [imageError, setImageError] = useState(false)
  const [usePlaceholder, setUsePlaceholder] = useState(false)
  const { openEnquiryModal } = useEnquiryModal()

  const handleEnquireClick = () => {
    openEnquiryModal({ category: categoryName, subcategory: item.label })
  }

  const imageUrl = usePlaceholder
    ? getSubcategoryPlaceholderUrl(item.label)
    : getSubcategoryImageUrl(categorySlug, item.label)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-slate-300 hover:shadow-md">
      <Link
        href={`/products/${categorySlug}`}
        className="block flex-1"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          {imageError ? (
            <div
              className="flex h-full w-full items-center justify-center bg-slate-200 px-4 text-center"
              aria-hidden
            >
              <span className="text-sm font-medium text-slate-600 line-clamp-2">
                {item.label}
              </span>
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={item.label}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform group-hover:scale-105"
              onError={() => (usePlaceholder ? setImageError(true) : setUsePlaceholder(true))}
            />
          )}
        </div>
        <div className="p-3">
          <p className="text-sm font-medium text-charcoal">{item.label}</p>
          <p className="mt-0.5 text-xs text-slate-500">{categoryName}</p>
        </div>
      </Link>
      <div className="border-t border-slate-100 p-3">
        <button
          type="button"
          onClick={handleEnquireClick}
          className="block w-full rounded-md bg-accent px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Enquire now
        </button>
      </div>
    </article>
  )
}
