/**
 * Minimal test page - uses (test) layout with NO globals.css/Tailwind.
 * Visit /test - if you see "TEST OK", root layout or globals.css is the culprit.
 */
export default function TestPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 48, marginBottom: 16 }}>TEST OK</h1>
      <p>If you see this, rendering works. The issue is in the main layout or globals.css.</p>
    </div>
  )
}
