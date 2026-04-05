// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#FDFBF7",
        cream: "#FEF7E5",
        dairyBlue: "#E3F2FD",
        freshGreen: "#E8F5E9",
        textMain: "#1F2937",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}