module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#FCA311',
      strongOrange: '#e6ff2b',
      gray: {
        light: '#D1D1D1',
      },
      green: "#10B981",
      white: '#FFF'
    },
    extend: {
      spacing: {
        '14.5': '70px'
      },
      dropShadow: {
        'extreme': '0 25px 25px rgba(0, 0, 0, 0.75)',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
