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
        // Your new Professional Theme Colors
        cheeseCream: "#FDF8E7", // Dark shade of white/cream for backgrounds
        dairyRed: "#C8102E",    // Professional, striking bold Red
        dairyBlack: "#1A1A1A",  // Deep black for standard text readability
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(200, 16, 46, 0.08)', 
        'redGlow': '0 10px 25px -5px rgba(200, 16, 46, 0.2)', 
      }
    },
  },
  plugins: [],
}