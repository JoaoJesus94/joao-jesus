const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { xs: '425px' },
      colors: {
        background: '#0B1238',
        tile: 'rgba(181, 15, 255, 0.3672)',
        skill: '#bb87f9',
        'skill-dark': '#bd8af984',
      },
      fontFamily: {
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        body: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-patch': { position: 'absolute', 'z-index': -100 },
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
}
