import Link from 'next/link'

export function CustomQuoteCta() {
  return (
    <section
      className="mt-16 rounded-2xl bg-dark px-6 py-12 text-center sm:px-12"
      aria-labelledby="quote-cta-heading"
    >
      <h2
        id="quote-cta-heading"
        className="font-display text-xl font-semibold text-white sm:text-2xl"
      >
        Request Custom Product Quote
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-300">
        Need a tailored solution? Fill out the form above or reach out directly.
      </p>
      <Link
        href="/contact#inquiry-form"
        className="mt-6 inline-flex items-center justify-center rounded-button border-2 border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        Request Custom Quote
      </Link>
    </section>
  )
}
