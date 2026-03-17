export type ProductSubcategory = {
  name: string
  items?: string[]
}

export type ProductCategory = {
  id: string
  name: string
  slug: string
  image?: string
  subcategories?: ProductSubcategory[]
  specs?: Record<string, string[]>
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fiber-mannequins',
    name: 'Fiber Mannequins',
    slug: 'fiber-mannequins',
    image: '/images/products/fiber-mannequins.jpg',
    specs: {
      Gender: ['Male', 'Female', 'Kids'],
      Position: ['Standing', 'Sitting'],
      'Display Categories': [
        'Sports',
        'Burst Mannequin',
        'Legs Mannequin',
        'Ghost Mannequin',
        'Store Mannequin',
        'Undergarments Mannequins',
        'Head Mannequin',
      ],
    },
  },
  {
    id: 'dress-forms',
    name: 'Dress Forms',
    slug: 'dress-forms',
    image: '/images/products/dress-forms.jpg',
    specs: {
      Gender: ['Male', 'Female', 'Kids'],
      Material: ['Wooden', 'Steel Stand'],
      Types: [
        'Half',
        'Full',
        'With Sleeves',
        'Without Sleeves',
        'Blouse',
        'Tabletop',
      ],
    },
  },
  {
    id: 'hangers',
    name: 'Hangers',
    slug: 'hangers',
    image: '/images/products/hangers.jpg',
    specs: {
      Material: ['Wooden', 'Plastic'],
      Types: [
        'Top Hanger',
        'Bottom or Trouser Hanger',
        'Coat Hanger',
        'Lingerie Hanger',
      ],
    },
    subcategories: [{ name: 'Customized Hangers' }],
  },
  {
    id: 'carry-bags',
    name: 'Carry Bags',
    slug: 'carry-bags',
    image: '/images/products/carry-bags.jpg',
    subcategories: [
      {
        name: 'Paper Carry Bags',
        items: [
          'White Paper (Bleach Kraft / Maplitho)',
          'Kraft Paper',
          'Board',
          'Customized Paper Bags',
        ],
      },
      {
        name: 'Cloth Bags',
        items: [
          '90–300 GSM',
          'Grey Fabric',
          'Black Fabric',
          'Customized Cloth Bags',
        ],
      },
    ],
  },
  {
    id: 'clothing-stands',
    name: 'Clothing Stands',
    slug: 'clothing-stands',
    image: '/images/products/clothing-stands.jpg',
    subcategories: [
      {
        name: 'Types',
        items: [
          'Mesh',
          'Single Pole',
          'Double Pole',
          'Round',
          'Floor Stands',
          'Browsers',
          'Exhibition',
          'Customized',
        ],
      },
    ],
  },
  {
    id: 'clothing-rack',
    name: 'Clothing Rack',
    slug: 'clothing-rack',
    image: '/images/products/clothing-rack.jpg',
    specs: {
      Channels: ['Single Slot', 'Double Slot'],
      Material: ['MS', 'SS', 'Powder Coating'],
      'Glass Brackets': ['6 inch', '12 inch', '18 inch'],
    },
  },
  {
    id: 'eas-security',
    name: 'EAS System (Retail Anti Theft)',
    slug: 'eas-security',
    image: '/images/products/eas-security.jpg',
    subcategories: [
      {
        name: 'Systems',
        items: ['RF Systems', 'AM Systems'],
      },
      {
        name: 'Products',
        items: [
          'Security Tags',
          'Labels',
          'Tag Detachers',
          'Double Checkers',
          'Deactivator Pads',
          'People Counter',
        ],
      },
    ],
  },
  {
    id: 'ethnic-clothing-covers',
    name: 'Ethnic Clothing Covers',
    slug: 'ethnic-clothing-covers',
    image: '/images/products/ethnic-clothing-covers.jpg',
    subcategories: [
      {
        name: 'Covers',
        items: [
          'Modi Jacket Cover',
          'Suit Cover',
          'Sherwani Cover',
          'Lehenga Cover',
          'Lehenga Bag',
        ],
      },
    ],
  },
  {
    id: 'store-branding',
    name: 'Store Branding',
    slug: 'store-branding',
    image: '/images/products/store-branding.jpg',
    subcategories: [
      {
        name: 'Products',
        items: ['LED Signages', 'Store Branding', 'Easel Stand'],
      },
    ],
  },
  {
    id: 'billing-solutions',
    name: 'Billing Solutions',
    slug: 'billing-solutions',
    image: '/images/products/billing-solutions.jpg',
    subcategories: [
      {
        name: 'Products',
        items: ['Barcode Printer', 'Barcode Scanner', 'Touch System'],
      },
    ],
  },
  {
    id: 'retail-accessories',
    name: 'Other Retail Accessories',
    slug: 'retail-accessories',
    image: '/images/products/retail-accessories.jpg',
    subcategories: [
      {
        name: 'Products',
        items: ['Garment Steamer', 'Cable Tie'],
      },
    ],
  },
]

export const PRODUCT_RANGE_GRID = PRODUCT_CATEGORIES.map((c) => ({
  name: c.name,
  slug: c.slug,
  image: c.image,
}))

export type SubcategoryGridItem = {
  label: string
}

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getSubcategoryLocalImagePath(categorySlug: string, label: string): string {
  return `/images/products/subcategories/${categorySlug}/${slugify(label)}.jpg`
}

export function getSubcategoryPlaceholderUrl(label: string): string {
  const text = encodeURIComponent(label)
  return `https://placehold.co/400x300/e8e8e8/374151?text=${text}`
}

export function getSubcategoryImageUrl(categorySlug: string, label: string): string {
  return getSubcategoryLocalImagePath(categorySlug, label)
}

export type SubcategoryGroup = {
  groupName: string
  items: SubcategoryGridItem[]
}

export function getSubcategoryGroups(
  category: ProductCategory
): SubcategoryGroup[] {
  const groups: SubcategoryGroup[] = []

  // 1. Add specs-based groups (Male, Female, Kids, etc.)
  if (category.specs) {
    for (const [key, values] of Object.entries(category.specs)) {
      if (values.length > 0) {
        groups.push({
          groupName: key,
          items: values.map((value) => ({ label: value })),
        })
      }
    }
  }

  // 2. Add subcategory-based groups
  if (category.subcategories && category.subcategories.length > 0) {
    category.subcategories.forEach((sub) => {
      if (sub.items && sub.items.length > 0) {
        // If it has specific items (like "White Paper"), create a dedicated group
        groups.push({
          groupName: sub.name,
          items: sub.items.map((item) => ({ label: item })),
        })
      } else {
        // Otherwise, add the subcategory name itself to an "Options" group
        let optionsGroup = groups.find((g) => g.groupName === 'Options')
        if (!optionsGroup) {
          optionsGroup = { groupName: 'Options', items: [] }
          groups.push(optionsGroup)
        }
        optionsGroup.items.push({ label: sub.name })
      }
    })
  }

  // 3. Fallback if no groups found
  if (groups.length === 0) {
    groups.push({
      groupName: category.name,
      items: [{ label: category.name }],
    })
  }

  return groups
}
