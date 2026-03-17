import { Card } from '@/components/ui/card'
import {
  Settings,
  Factory,
  Award,
  Truck,
  Sparkles,
} from 'lucide-react'

const REASONS = [
  {
    icon: Settings,
    title: 'Custom Manufacturing',
    description: 'Tailored solutions to match your brand and store requirements.',
  },
  {
    icon: Factory,
    title: 'Bulk Production Capability',
    description: 'Scale with confidence for retail chains and large orders.',
  },
  {
    icon: Award,
    title: 'Trusted by Leading Retail Brands',
    description: 'Partner with brands that demand quality and reliability.',
  },
  {
    icon: Truck,
    title: 'Pan India Supply',
    description: 'We deliver across India with a reliable logistics network.',
  },
  {
    icon: Sparkles,
    title: 'High Quality Materials',
    description: 'Premium materials and finishes for long-lasting display solutions.',
  },
]

export function WhyChooseUs() {
  return (
    <section
      style={{ padding: '64px 16px', backgroundColor: '#F0F0F0' }}
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="why-choose-heading"
          className="text-3xl font-semibold sm:text-4xl"
          style={{ color: '#333333' }}
        >
          Why Choose Us
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600">
          Quality, reliability, and a commitment to your success.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {REASONS.map((reason) => (
            <Card key={reason.title} className="flex flex-col">
              <reason.icon
                className="h-10 w-10"
                style={{ color: '#D93025' }}
                aria-hidden
              />
              <h3 className="mt-4 font-semibold text-gray-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
