import type { Metadata } from 'next'
import { ContactInfo } from '@/components/contact/contact-info'
import { InquiryForm } from '@/components/contact/inquiry-form'
import { CustomQuoteCta } from '@/components/contact/custom-quote-cta'
import { ContactStructuredData } from '@/components/contact/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Vivek's Creation for bulk orders, custom manufacturing, and retail display solutions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactStructuredData />
      <section className="bg-beige px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Have a question or ready to place an order? We are here to help.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div id="inquiry-form" className="lg:col-span-3">
            <h2 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
              Send Us an Inquiry
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out the form below and we will get back to you with the best
              price and solutions.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>

        <CustomQuoteCta />
      </div>
    </section>
    </>
  )
}
