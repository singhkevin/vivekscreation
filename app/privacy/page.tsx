import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Privacy Policy for Vivek's Creation - how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <section className="bg-beige px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                1. Introduction
              </h2>
              <p className="mt-3">
                Vivek&apos;s Creation (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or contact us for business inquiries.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We may collect information that you provide when you:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Contact us via our inquiry form</li>
                <li>Communicate with us by email or phone</li>
                <li>Request quotes or place orders</li>
              </ul>
              <p className="mt-3">
                This may include your name, company name, email address, phone number, and any other details you provide in your messages.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information we collect to:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and process your orders</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                4. Information Sharing
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share your information only with service providers who assist us in operating our business (e.g., hosting, analytics), and only to the extent necessary.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                5. Data Security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the Internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                6. Contact Us
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:Vivek@vivekscreation.com" className="text-accent">
                  Vivek@vivekscreation.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
