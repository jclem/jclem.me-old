/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mdx-components.tsx',
    './posts/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        canvas: 'var(--color-canvas)',
        card: 'var(--color-card)',
        'card-text': 'var(--color-card-text)',
        text: 'var(--color-text)',
        'text-deemphasize': 'var(--color-text-deemphasize)',
        'code-bg': 'var(--color-code-bg)',
        highlight: 'var(--color-highlight)'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      }
    }
  },
  plugins: []
}

export default tailwindConfig
