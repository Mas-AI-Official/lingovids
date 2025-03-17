/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './src/app/globals.css',
],
theme: {
  extend: {},
},
plugins: [require('@tailwindcss/forms')],
}
