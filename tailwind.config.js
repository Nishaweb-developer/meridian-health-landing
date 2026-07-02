/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F6F4",
        ink: "#16241F",
        deep: { DEFAULT: "#0F3B36", 2: "#144A43" },
        sage: { DEFAULT: "#C7DED8", 2: "#E4EEEA" },
        amber: { DEFAULT: "#E8823C", dark: "#C96A2B" },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        arabic: ["'IBM Plex Sans Arabic'", "'Noto Kufi Arabic'", "sans-serif"],
      },
      keyframes: {
        draw: { to: { strokeDashoffset: 0 } },
      },
      animation: {
        draw: "draw 2.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
