'use client'

import { useEffect } from 'react'

export function DebugVisibility() {
  useEffect(() => {
    const run = () => {
      try {
        const main = document.querySelector('main')
        const body = document.body
        const hero = document.querySelector('[aria-labelledby="hero-heading"]')
        const header = document.querySelector('header')
        const mainStyle = main ? getComputedStyle(main) : null

        const data = {
          bodyHeight: body?.offsetHeight ?? 0,
          bodyWidth: body?.offsetWidth ?? 0,
          mainHeight: main?.offsetHeight ?? 0,
          mainWidth: main?.offsetWidth ?? 0,
          mainChildCount: main?.children?.length ?? 0,
          mainDisplay: mainStyle?.display ?? 'N/A',
          mainVisibility: mainStyle?.visibility ?? 'N/A',
          mainOpacity: mainStyle?.opacity ?? 'N/A',
          heroExists: !!hero,
          heroHeight: hero?.clientHeight ?? 0,
          headerExists: !!header,
          headerHeight: header?.clientHeight ?? 0,
        }

        // #region agent log
        fetch('/api/debug-log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: '2c0609', location: 'debug-visibility:client', message: 'Client DOM visibility check', data, timestamp: Date.now(), hypothesisId: 'B,C,D' }),
        }).catch(() => {})
        // #endregion agent log
      } catch (err) {
        // #region agent log
        fetch('/api/debug-log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: '2c0609', location: 'debug-visibility:catch', message: 'Client check threw', data: { error: String(err) }, timestamp: Date.now(), hypothesisId: 'E' }),
        }).catch(() => {})
        // #endregion agent log
      }
    }
    run()
    const t = setTimeout(run, 500)
    return () => clearTimeout(t)
  }, [])
  return null
}
