import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'Vivek@vivekscreation.com'
const CC_EMAIL = 'kevin@viralinbound.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, companyName, category, phone, email, message } = body

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      const from = process.env.RESEND_FROM_EMAIL ?? "Vivek's Creation <onboarding@resend.dev>"

      const { error } = await resend.emails.send({
        from,
        to: [TO_EMAIL],
        cc: [CC_EMAIL],
        replyTo: email,
        subject: `Enquiry from ${name}${companyName ? ` (${companyName})` : ''}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          ${companyName ? `<p><strong>Company:</strong> ${escapeHtml(companyName)}</p>` : ''}
          ${category ? `<p><strong>Category:</strong> ${escapeHtml(category)}</p>` : ''}
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      })

      if (error) {
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      }
      return NextResponse.json({ success: true })
    }

    // Fallback: Formspree (configure To/CC in Formspree dashboard if needed)
    const formId = process.env.FORMSPREE_FORM_ID
    if (formId) {
      const formspreeRes = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          companyName: companyName || '',
          category: category || '',
          phone,
          email,
          message,
        }),
      })

      if (!formspreeRes.ok) {
        return NextResponse.json(
          { error: 'Failed to submit' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c)
}
