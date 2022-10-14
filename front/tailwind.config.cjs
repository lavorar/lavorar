/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-brand": "#FF8A00",
        "orange-high": "#FFAA2B",
        "white-ghost": "rgb(250,250,250)",
      },
    },
  },
  plugins: [],
}
