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
        creamBg: "#F9F6F0",
        dairyNavy: "#002147",
        dairyGold: "#E2B254",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(0, 33, 71, 0.1)',
        'gold': '0 10px 25px -5px rgba(226, 178, 84, 0.3)',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
}