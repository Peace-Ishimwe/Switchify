/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'dark-main': '#121313',
        'dark-major': '#191726',
        'dark-team':'#6F6F6F',
      },
    },
  },
  plugins: [],
}
