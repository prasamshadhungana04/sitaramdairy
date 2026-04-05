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
        milk: "#FFFFFF",
        creamBg: "#F9F6F0",      /* Textured paper-like background */
        dairyNavy: "#002147",    /* Deep premium navy blue */
        dairyGold: "#E2B254",    /* The specific golden yellow from your images */
        textMuted: "#6B7280"
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}