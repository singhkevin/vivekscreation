import { HeroSection } from '@/components/home/hero-section'
import { ProductRangeGrid } from '@/components/home/product-range-grid'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { CustomizationCta } from '@/components/home/customization-cta'
import { ContactCtaSection } from '@/components/home/contact-cta-section'

export default function HomePage() {
  // #region agent log
  try {
    const fs = require('fs')
    const path = require('path')
    const dir = path.join(process.cwd(), '.cursor')
    const logPath = path.join(dir, 'debug-2c0609.log')
    const payload = { sessionId: '2c0609', location: 'page.tsx:HomePage', message: 'Server page render', data: {}, timestamp: Date.now(), hypothesisId: 'A' }
    fs.mkdirSync(dir, { recursive: true })
    fs.appendFileSync(logPath, JSON.stringify(payload) + '\n')
  } catch (_) {}
  // #endregion agent log

  return (
    <>
      <HeroSection />
      <ProductRangeGrid />
      <WhyChooseUs />
      <CustomizationCta />
      <ContactCtaSection />
    </>
  )
}
