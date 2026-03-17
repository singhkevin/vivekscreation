import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ContactCtaSection() {
  return (
    <section
      style={{ padding: '64px 16px', backgroundColor: '#F0F0F0' }}
      aria-labelledby="contact-cta-heading"
    >
      <div className="mx-auto max-w-content text-center">
        <h2
          id="contact-cta-heading"
          style={{ color: '#333', fontSize: '1.875rem', fontWeight: 600 }}
        >
          Get in Touch
        </h2>
        <p style={{ color: '#4b5563', maxWidth: 600, margin: '16px auto 0' }}>
          Based in Bangalore, we serve retailers across Karnataka and pan
          India. For bulk orders and custom manufacturing of mannequins,
          hangers and display solutions, our team is ready to help.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button href="/products" variant="secondary">
            View Products
          </Button>
        </div>
      </div>
    </section>
  )
}
