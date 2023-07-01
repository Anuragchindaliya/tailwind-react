const { themePreset } = require("./styles/themePreset.ts");
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  present: [themePreset],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
