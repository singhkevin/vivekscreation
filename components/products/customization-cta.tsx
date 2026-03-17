import Link from 'next/link'

export function ProductsCustomizationCta() {
  return (
    <section
      className="mt-16 rounded-2xl bg-grey-light px-6 py-12 text-center sm:px-12"
      aria-labelledby="products-cta-heading"
    >
      <h2
        id="products-cta-heading"
        className="font-display text-xl font-semibold text-charcoal sm:text-2xl"
      >
        Need Custom Products?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-600">
        For any type of customization, contact us. Our team will help you find
        the perfect solution for your brand.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-button bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Contact Us
      </Link>
    </section>
  )
}
