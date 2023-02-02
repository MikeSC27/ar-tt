/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'golfoct-image':'url("./components/assets/golfoct.png"'
    },
  },
  plugins: [],
}
