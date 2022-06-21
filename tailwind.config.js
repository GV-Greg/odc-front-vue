const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /text-(gray|yellow|salmon|teal|slate|blue|red|orange|lime|green|cyan|indigo|pink)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /ring-offset-(gray|yellow|salmon|teal|slate|blue|red|orange|lime|green|cyan|indigo|pink)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /ring-(gray|yellow|salmon|teal|slate|blue|red|orange|lime|green|cyan|indigo|pink)-(100|200|300|400|500|600|700|800|900)/, },
    { pattern: /bg-(gray|yellow|salmon|teal|slate|blue|red|orange|lime|green|cyan|indigo|pink)-(100|200|300|400|500|600|700|800|900)/, },
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.sky,
      indigo: colors.violet,
      pink: colors.fuchsia,
      salmon: colors.rose,
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '225': '225deg',
      '270': '270deg',
    },
    extend: {
      gridTemplateColumns: {
        // Simple 15 column grid
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Simple 15 row grid
        '15': 'repeat(15, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
