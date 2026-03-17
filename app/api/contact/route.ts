import { NextResponse } from 'next/server'

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
    // When FORMSPREE_FORM_ID is not set, return success for development

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
