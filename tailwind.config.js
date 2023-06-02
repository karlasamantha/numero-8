/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/components/**/*.jsx',
    './src/components/**/*.js',
    './src/App.js'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      gridTemplateColumns: {
        row: '250px minmax(850px, 3fr) 2fr'
      }
    }
  },
  plugins: []
}
