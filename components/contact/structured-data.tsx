import { CONTACT } from '@/lib/constants'

export function ContactStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Vivek's Creation",
    description:
      'Manufacturer and supplier of retail store display solutions and accessories including mannequins, hangers, racks, and EAS security systems.',
    url: 'https://vivekscreation.com',
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
      streetAddress: 'Sudhama Nagar',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
