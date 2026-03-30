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

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
    if (!scriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL not configured in environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const payload = {
      name,
      company: companyName || '',
      requirement: category || '',
      phone,
      email,
      message,
      formName: "Inquiry Form",
      sourceWebsite: "Vivek's Creation",
      pageUrl: request.headers.get('referer') || "Contact Page"
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Google Apps Script failed with status: ${response.status}`)
    }

    const result = await response.json()
    if (!result.success) {
      throw new Error(result.error || 'Unknown Google Apps Script error')
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Contact form submission error:', err)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
