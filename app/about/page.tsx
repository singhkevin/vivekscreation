import type { Metadata } from 'next'
import { CompanyOverview } from '@/components/about/company-overview'
import { WhatWeDo } from '@/components/about/what-we-do'
import { OurClients } from '@/components/about/our-clients'
import { OurStrengths } from '@/components/about/our-strengths'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about Vivek's Creation - manufacturers of retail display products for fashion brands, boutiques, and retail chains.",
}

export default function AboutPage() {
  return (
    <>
      <CompanyOverview />
      <WhatWeDo />
      <OurClients />
      <OurStrengths />
    </>
  )
}
