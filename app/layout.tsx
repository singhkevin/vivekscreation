import type { Metadata } from 'next'
import './globals.css'
import { HeaderServer } from '@/components/layout/header-server'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: "Vivek's Creation | Retail Display Solutions for Modern Brands",
    template: `%s | Vivek's Creation`,
  },
  description:
    "Vivek's Creation manufactures mannequins, hangers, dress forms, display systems, and retail accessories in Bangalore. Trusted by fashion brands across Karnataka and pan India for store display solutions.",
  openGraph: {
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // #region agent log
  const payload = { sessionId: '2c0609', location: 'layout.tsx:RootLayout', message: 'Server layout render', data: { hasChildren: !!children }, timestamp: Date.now(), hypothesisId: 'A' }
  console.log('[DEBUG 2c0609]', JSON.stringify(payload))
  try {
    const fs = require('fs')
    const path = require('path')
    const dir = path.join(process.cwd(), '.cursor')
    const logPath = path.join(dir, 'debug-2c0609.log')
    fs.mkdirSync(dir, { recursive: true })
    fs.appendFileSync(logPath, JSON.stringify(payload) + '\n')
  } catch (e) {
    console.error('[DEBUG 2c0609] layout fs error:', e)
  }
  // #endregion agent log

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* #region agent log */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p={sessionId:'2c0609',location:'layout:inline-script',message:'Page load before React',data:{},timestamp:Date.now(),hypothesisId:'D'};fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}).catch(function(){});})();`,
          }}
        />
        {/* #endregion agent log */}
        <style dangerouslySetInnerHTML={{ __html: `
          *{box-sizing:border-box}
          html,body{margin:0;padding:0;height:100%}
          body{min-height:100vh;display:flex;flex-direction:column;background:#F8F5ED !important;color:#333 !important;font-family:system-ui,-apple-system,sans-serif;font-size:16px}
          main{flex:1 1 auto;display:block}
        ` }} />
      </head>
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }} suppressHydrationWarning>
        <HeaderServer />
        <main style={{ flex: '1 1 auto' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
