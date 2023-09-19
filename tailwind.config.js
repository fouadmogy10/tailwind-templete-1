/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#9A7AF1",
        "secondary":"#010851",
        "tartiary":"#707070",
        "pink":"#EE9AE5",
      }
    },
  },
  plugins: [],
}