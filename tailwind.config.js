module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#FCA311',
      strongOrange: '#e6ff2b',
      darkRed: '#6f0f16',
      brightred: "#d21b1b",
      gray: {
        light: '#D1D1D1',
        darker: '#797979'
      },
      green: "#10B981",
      darkgreen: "#0e521c",
      brightgreen: "#589d25",
      white: '#FFF'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1110px',
      'xl': '1280px',
      '2xl': '1536px',
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
