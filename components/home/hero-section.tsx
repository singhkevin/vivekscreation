import Link from 'next/link'
import { BRANDS } from '@/lib/constants'
import { InquiryForm } from '@/components/contact/inquiry-form'
import { BrandLogo } from '@/components/home/brand-logo'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80'

export function HeroSection() {
  const brandList = [...BRANDS, ...BRANDS]

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        marginTop: '-56px',
        paddingTop: '56px',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Hero content - centered over image */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          aria-hidden
        />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
        }}
        className="flex flex-col items-center gap-12 px-4 pt-20 pb-16 lg:grid lg:grid-cols-[1fr_400px] lg:items-center lg:gap-12 lg:px-8"
      >
        <div className="w-full max-w-2xl text-center lg:max-w-none lg:text-left">
        <h1
          id="hero-heading"
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
            fontWeight: 700,
            margin: 0,
            letterSpacing: '0.02em',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          Welcome To Vivek&apos;s Creation
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            margin: '1.5rem auto 0',
            lineHeight: 1.6,
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}
        >
          Your one-stop solution for retail display, mannequins, hangers, dress forms and store branding. Based in Bangalore, we serve retailers and fashion brands across Karnataka and pan India.
        </p>
        <Link
          href="/products"
          style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            padding: '14px 36px',
            backgroundColor: '#DE3C3F',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          View Products Range
        </Link>

        {/* Brand carousel - below button */}
        <div
          style={{
            marginTop: '3rem',
            width: '100%',
            maxWidth: 800,
          }}
        >
          <p
            style={{
              margin: '0 0 0.75rem 0',
              textAlign: 'center',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Trusted by leading retail brands
          </p>
          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                @keyframes brandScroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .brand-track {
                  display: inline-flex;
                  gap: 2rem;
                  padding: 0 1rem;
                  animation: brandScroll 25s linear infinite;
                }
                .brand-track:hover { animation-play-state: paused; }
                `,
              }}
            />
            <div className="brand-track">
              {brandList.map((brand, i) => (
                <BrandLogo
                  key={`${brand.slug}-${i}`}
                  brand={brand}
                  variant="light"
                  className="shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="w-full shrink-0 px-4 lg:px-0">
          <div
            className="rounded-xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm lg:p-8"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
          >
            <h2
              className="mb-4 text-lg font-semibold text-charcoal"
              style={{ color: '#333' }}
            >
              Get a Quote
            </h2>
            <p className="mb-5 text-sm text-slate-600">
              Tell us about your requirements and we will get back soon.
            </p>
            <InquiryForm />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
