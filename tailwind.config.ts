import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slow-bounce': {
          '0%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(-5%)' },
        },
      },
      animation: {
        'slow-bounce': 'slow-bounce 4s ease-in-out infinite',
      },
      screens: { xs: '425px' },
      colors: {
        background: '#0B1238',
        tile: 'rgba(181, 15, 255, 0.3672)',
        skill: '#bb87f9',
        'skill-dark': '#bd8af984',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', ...fontFamily.sans],
        body: ['var(--font-dm-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-heading': {
          color: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(89.78deg, #B588FF 0%, #EC7BFF 50%, #D083E2 100%)',
        },
        '.gradient-heading-dark': {
          color: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(89.78deg, #B588FF 0%, #ECBBE0 50%, #D083E2 100%)',
        },
        '.gradient-button': {
          backgroundImage: 'linear-gradient(85.28deg, #B783FE 0%, #E97BFC 50%, #DE9EE1 100%)',
        },
        '.gradient-button-dark': {
          backgroundImage: 'linear-gradient(87.2deg, #B783FE 0%, #DBA9E9 50%, #DE9EE1 100%)',
        },
      })
    }),
  ],
} satisfies Config
