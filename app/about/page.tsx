import type { Metadata } from 'next'
import { AreasWeServe } from '@/components/about/areas-we-serve'
import { CompanyOverview } from '@/components/about/company-overview'
import { WhatWeDo } from '@/components/about/what-we-do'
import { OurClients } from '@/components/about/our-clients'
import { OurStrengths } from '@/components/about/our-strengths'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Vivek's Creation is a Bangalore-based manufacturer of mannequins, hangers, dress forms and retail display solutions. We serve fashion brands and stores across Karnataka and pan India.",
}

export default function AboutPage() {
  return (
    <>
      <CompanyOverview />
      <WhatWeDo />
      <AreasWeServe />
      <OurClients />
      <OurStrengths />
    </>
  )
}
