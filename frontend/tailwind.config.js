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
        // Luxury Red, White, and Black Palette
        creamBg: "#FAFAFA",    // Pearl White (Soft, high-end background)
        dairyNavy: "#171717",  // Onyx Black (Replaces basic black for text/headers)
        dairyGold: "#991B1B",  // Deep Crimson (Replaces neon red for accents/buttons)
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        // Custom premium shadows optimized for the new dark and crimson tones
        'premium': '0 20px 40px -10px rgba(23, 23, 23, 0.15)', 
        'gold': '0 10px 25px -5px rgba(153, 27, 27, 0.25)', 
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