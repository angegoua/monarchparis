import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6A06',
        silver: '#F3F3F3',
      },
    },

    fontFamily: {
      display: ['var(--font-satoshi)'],
      sans: ['var(--font-satoshi)'],
      serif: ['var(--font-instrument)'],
    },
  },
  plugins: [],
}
export default config
