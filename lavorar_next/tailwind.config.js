/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        "orange-brand": "#FF8A00",
        "orange-high": "#FFAA2B",
        "orange-pastel": "#ff9a22 ",
        "white-ghost": "rgb(250,250,250)",
      },
    },
  },
  plugins: [],
}
