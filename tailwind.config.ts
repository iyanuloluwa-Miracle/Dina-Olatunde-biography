import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts}',
    './composables/**/*.ts',
    './app.vue',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          soft: '#16203A',
          deep: '#0A0F1E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E3C766',
          muted: 'rgba(212, 175, 55, 0.35)',
        },
        ivory: '#FAFAF9',
        stone: {
          DEFAULT: '#78716C',
          light: '#A8A29E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        quote: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      maxWidth: {
        prose2: '68ch',
      },
    },
  },
  plugins: [],
}
