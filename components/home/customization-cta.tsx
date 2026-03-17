import Link from 'next/link'

export function CustomizationCta() {
  return (
    <section
      className="px-4 py-16 sm:py-20"
      aria-labelledby="customization-heading"
    >
      <div className="mx-auto max-w-content">
        <div
          style={{
            borderRadius: 16,
            padding: '64px 32px',
            textAlign: 'center',
            backgroundColor: '#2E2E2E',
          }}
        >
          <h2
            id="customization-heading"
            style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600 }}
          >
            Custom Solutions for Your Brand
          </h2>
          <p style={{ color: '#d1d5db', maxWidth: 600, margin: '16px auto 0' }}>
            We provide customized retail display solutions tailored to your
            brand, store layout, and merchandising needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-button border-2 border-white bg-white px-6 py-3 text-sm font-medium text-dark transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
