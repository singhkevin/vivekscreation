import { MapPin } from 'lucide-react'

export function AreasWeServe() {
  return (
    <section
      className="bg-beige px-4 py-16 sm:py-20"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="areas-heading"
          className="font-display text-3xl font-semibold text-charcoal sm:text-4xl"
        >
          Areas We Serve
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          We are based in Bangalore and supply retail display products across
          Karnataka and pan India. Whether you need mannequins in Bangalore,
          hangers and dress forms for stores in Mumbai, Delhi, Chennai, or
          Hyderabad, or bulk orders for retail chains nationwide, we deliver
          quality products and support.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-charcoal">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            Bangalore & Karnataka
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-charcoal">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            Pan India delivery
          </span>
        </div>
      </div>
    </section>
  )
}
