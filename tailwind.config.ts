import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#B9FF66",
        secondary: "#000000",
        accent: "#FFFFFF"
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: "64px",
        h1Mobile: "44px",
        h2: "40px",
        h3: "30px",
        h3Mobile: "26px",
        p: "20px"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config