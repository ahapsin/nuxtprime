/** @type {import('tailwindcss').Config} */
const primeui = require("tailwindcss-primeui");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  colors: {
    pr: {
      DEFAULT: "#009b4f",
      50: "#edfff5",
      100: "#d6ffeb",
      200: "#afffd7",
      300: "#71ffb9",
      400: "#2dfb94",
      500: "#02e575",
      600: "#00bf5d",
      700: "#009b4f",
      800: "#06753f",
      900: "#085f36",
      950: "#00361c",
    },
  },
  plugins: [primeui],
};
