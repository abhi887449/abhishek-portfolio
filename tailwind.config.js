/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '0px 5px 20px -5px gray',
      }
    },
  },
  plugins: [],
}
