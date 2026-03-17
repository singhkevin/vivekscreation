import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export function ContactInfo() {
  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      aria-labelledby="contact-info-heading"
    >
      <h2
        id="contact-info-heading"
        className="font-display text-xl font-semibold text-charcoal sm:text-2xl"
      >
        Contact Information
      </h2>
      <ul className="mt-6 list-none space-y-4 pl-0">
        <li>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-slate-700 hover:text-accent"
          >
            <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <span>{CONTACT.phone}</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 text-slate-700 hover:text-accent"
          >
            <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <span>{CONTACT.email}</span>
          </a>
        </li>
        <li className="flex items-start gap-3">
          <MapPin
            className="mt-0.5 h-5 w-5 shrink-0 text-accent"
            aria-hidden
          />
          <span className="text-slate-700">{CONTACT.address}</span>
        </li>
      </ul>
    </section>
  )
}
