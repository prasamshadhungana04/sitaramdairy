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
        creamBg: "#F9F6F0",       /* Soft cream background */
        farmGreen: "#2E5C31",     /* Classic farm green */
        dairyNavy: "#002147",     /* Deep premium navy */
        dairyGold: "#E2B254",     /* Golden accent */
        lightGreen: "#E8F0E9",    /* Subtle green highlight */
        accentYellow: "#EAB308",  /* Highlight / badges / stars */
        textMain: "#1C251D",      /* Main text color */
        textMuted: "#6B7280",     /* Secondary text */
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}