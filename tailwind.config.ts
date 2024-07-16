import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      silver: '#F3F3F3',
    },
    fontFamily: {
      sans: ['var(--font-satoshi)'],
      serif: ['var(--font-instrument)'],
    },
  },
  plugins: [],
}
export default config
