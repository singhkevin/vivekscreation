import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: { preflight: false },
  safelist: [
    { pattern: /^max-w-|^mx-auto|^flex|^grid|^hidden|^md:flex|^md:hidden|^block$/ },
    'list-none',
    'group-open:hidden',
    'group-open:flex',
    'group-open:inline',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        dark: '#2E2E2E',
        beige: {
          DEFAULT: '#F8F5ED',
          light: '#F7F2EB',
        },
        grey: {
          light: '#F0F0F0',
          lighter: '#EFEFEF',
        },
        brand: {
          red: '#D93025',
          redLight: '#E84A40',
          redDark: '#C4281F',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          DEFAULT: '#D93025',
          light: '#E84A40',
          dark: '#C4281F',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button: '6px',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
export default config
