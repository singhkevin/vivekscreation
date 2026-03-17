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

The contact form submits to `/api/contact`. To receive real emails:

1. Create a form at [Formspree](https://formspree.io)
2. Add `FORMSPREE_FORM_ID=your_form_id` to `.env.local`

Without this, the API returns success for development.
