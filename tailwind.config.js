module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '524':'498px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
