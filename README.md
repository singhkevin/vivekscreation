# Vivek's Creation

Modern B2B manufacturing website for retail display solutions and accessories.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Form Submission

The contact form submits to `/api/contact`. Enquiries are emailed to **Vivek@vivekscreation.com** with **kevin@viralinbound.com** in CC.

### Option 1: Resend (recommended)

1. Sign up at [Resend](https://resend.com) and get an API key.
2. Add to `.env.local`:
   - `RESEND_API_KEY=re_xxxxx`
   - Optional: `RESEND_FROM_EMAIL=Vivek's Creation <enquiries@yourdomain.com>` (use a verified domain; omit to use Resend sandbox for testing).

### Option 2: Formspree fallback

If `RESEND_API_KEY` is not set, the API can use Formspree instead (configure To/CC in the Formspree dashboard):

- `FORMSPREE_FORM_ID=your_form_id` in `.env.local`

With neither set, the API returns success for development but does not send email.
