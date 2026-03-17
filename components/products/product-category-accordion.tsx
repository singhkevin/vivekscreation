import { AccordionItem } from '@/components/ui/accordion'
import { ProductSubcategory } from './product-subcategory'
import { ProductImage } from './product-image'
import type { ProductCategory } from '@/lib/products-data'

type ProductCategoryAccordionProps = {
  categories: ProductCategory[]
}

export function ProductCategoryAccordion({
  categories,
}: ProductCategoryAccordionProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      {categories.map((category, index) => (
        <AccordionItem
          key={category.id}
          id={category.slug}
          title={category.name}
          defaultOpen={index === 0}
        >
          <div className="space-y-6">
            {category.image && (
              <ProductImage
                src={category.image}
                alt={category.name}
                priority={index === 0}
              />
            )}
            <ProductSubcategory category={category} />
          </div>
        </AccordionItem>
      ))}
    </div>
  )
}
