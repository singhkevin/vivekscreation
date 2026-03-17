import type { ProductCategory } from '@/lib/products-data'

type ProductSubcategoryProps = {
  category: ProductCategory
}

export function ProductSubcategory({ category }: ProductSubcategoryProps) {
  const { specs, subcategories } = category

  return (
    <div className="space-y-6">
      {specs && Object.keys(specs).length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(specs).map(([key, values]) => (
            <div key={key} className="rounded-lg bg-slate-50 p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {key}
              </h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {values.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {subcategories &&
        subcategories.map((sub) => (
          <div key={sub.name} className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {sub.name}
            </h4>
            {sub.items ? (
              <ul className="flex flex-wrap gap-2">
                {sub.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-600">{sub.name}</p>
            )}
          </div>
        ))}
    </div>
  )
}
