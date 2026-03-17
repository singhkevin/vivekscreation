export function CompanyOverview() {
  return (
    <section
      className="bg-beige px-4 py-16 sm:py-20"
      aria-labelledby="overview-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="overview-heading"
          className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
        >
          Company Overview
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Vivek&apos;s Creation manufactures retail display products for fashion
          brands, boutiques, and retail chains. We are a trusted supplier of
          mannequins, hangers, racks, store display systems, packaging, and
          retail accessories used by clothing brands and retail stores
          globally.
        </p>
      </div>
    </section>
  )
}
