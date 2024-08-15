/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)', boxShadow: '1px 5px 2px #e65c00' },
          '50%': { transform: 'rotate(180deg)', boxShadow: '1px 5px 2px #18b201' },
          '100%': { transform: 'rotate(360deg)', boxShadow: '1px 5px 2px #0456c8' },
        },
      },
      animation: {
        'spin-custom': 'ring 2s linear infinite',
      },
    },
  },
  plugins: [],
};