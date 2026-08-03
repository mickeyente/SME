import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          soft: 'rgb(var(--color-ink-soft) / <alpha-value>)',
        },
        paper: {
          DEFAULT: 'rgb(var(--color-paper) / <alpha-value>)',
          raised: 'rgb(var(--color-paper-raised) / <alpha-value>)',
        },
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        safe: 'rgb(var(--color-safe) / <alpha-value>)',
        caution: 'rgb(var(--color-caution) / <alpha-value>)',
        risk: 'rgb(var(--color-risk) / <alpha-value>)',
        line: 'rgb(var(--color-ink) / 0.12)',
      },
      fontSize: {
        'display-lg': ['var(--text-display-lg)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        display: ['var(--text-display)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        title: ['var(--text-title)', { lineHeight: '1.3' }],
        body: ['var(--text-body)', { lineHeight: '1.55' }],
        small: ['var(--text-small)', { lineHeight: '1.5' }],
        caption: ['var(--text-caption)', { lineHeight: '1.4' }],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        control: 'var(--radius-control)',
      },
      transitionTimingFunction: {
        seal: 'var(--ease-seal)',
      },
    },
  },
  plugins: [],
}
export default config
