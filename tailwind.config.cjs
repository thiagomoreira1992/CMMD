/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.tsx',
  ],
  theme: {    
    extend: {
      colors: {
        'light-blue' : '#e4f5ff'
      },
      fontFamily:{
        'open' : ['"Open Sans"'],
      }
    },
  },
  plugins: [],
}
