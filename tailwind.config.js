module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'home-page-height' : 'calc(100vh - 96px)'
      },
      colors: {
        'theme-red' : '#FF3B28',
        'theme-blue' : '#00A7FA',
        'theme-green' : '#48EB12',
      }
    },
    container: {
      center: true
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
