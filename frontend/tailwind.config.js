// frontend/tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creamBg: "#FFFFFF",  // Changed to white
        dairyRed: "#DC2626",  // New red color
        dairyDarkRed: "#B91C1C",  // Darker red for hover
        dairyLightRed: "#FEE2E2",  // Light red background
        dairyNavy: "#DC2626",  // Replaced navy with red
        dairyGold: "#FFFFFF",  // Replaced gold with white
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 35px -10px rgba(220, 38, 38, 0.15)',
        'red': '0 10px 25px -5px rgba(220, 38, 38, 0.2)',
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
};