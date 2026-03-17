import { Card } from '@/components/ui/card'
import { Wrench, Shield, TrendingUp, Layers } from 'lucide-react'

const STRENGTHS = [
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored display solutions to match your brand identity and store layout.',
  },
  {
    icon: Shield,
    title: 'Reliable Manufacturing',
    description: 'Consistent quality and on-time delivery backed by years of experience.',
  },
  {
    icon: TrendingUp,
    title: 'Retail Industry Expertise',
    description: 'Deep understanding of fashion retail and merchandising requirements.',
  },
  {
    icon: Layers,
    title: 'Scalable Production',
    description: 'From boutique orders to bulk production for retail chains.',
  },
]

export function OurStrengths() {
  return (
    <section
      className="bg-grey-light px-4 py-16 sm:py-20"
      aria-labelledby="strengths-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="strengths-heading"
          className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
        >
          Our Strengths
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          What sets us apart in the retail display industry.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((strength) => (
            <Card key={strength.title} className="flex flex-col">
              <strength.icon
                className="h-10 w-10 text-accent"
                aria-hidden
              />
              <h3 className="mt-4 font-semibold text-charcoal">
                {strength.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {strength.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
