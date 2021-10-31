module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#FCA311',
      gray: {
        light: '#D1D1D1',
      },
      green: "#10B981",
    },
    extend: {
      spacing: {
        '14.5': '70px'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
