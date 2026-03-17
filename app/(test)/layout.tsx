/**
 * Minimal layout - NO globals.css, NO Tailwind, NO shared components.
 * Used only for /test to isolate the blank-page issue.
 */
export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Test</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `*{box-sizing:border-box}html,body{margin:0;padding:0;min-height:100vh;background:#fff;color:#000;font-family:system-ui,sans-serif}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
