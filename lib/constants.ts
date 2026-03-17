export const SITE_NAME = "Vivek's Creation"

export type Brand = {
  name: string
  slug: string
  logo: string
}

export const BRANDS: Brand[] = [
  { name: 'Blissclub', slug: 'blissclub', logo: '/images/brands/blissclub.avif' },
  { name: 'Newme', slug: 'newme', logo: '/images/brands/newme.png' },
  { name: 'Snitch', slug: 'snitch', logo: '/images/brands/snitch.webp' },
  { name: 'Rare Rabbit', slug: 'rare-rabbit', logo: '/images/brands/rare-rabbit.avif' },
  { name: 'Rareism', slug: 'rareism', logo: '/images/brands/rareism.png' },
  { name: 'Koskii', slug: 'koskii', logo: '/images/brands/koskii.png' },
  { name: 'Smoor', slug: 'smoor', logo: '/images/brands/smoor.webp' },
  { name: 'Pasta Street', slug: 'pasta-street', logo: '/images/brands/pasta-street.png' },
  { name: 'Dazzle Studio', slug: 'dazzle-studio', logo: '/images/brands/dazzle-studio.png' },
]

export const CONTACT = {
  phone: '+91 98861 87879',
  email: 'Vivek@vivekscreation.com',
  address: 'Sudhama Nagar, Bangalore, Karnataka, India',
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
] as const
