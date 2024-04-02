/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#1A1A1C",
      border: "#4F4F4F",
      grey: {
        100: "#C9C7C8",
        200: "#999FA5",
        300: "#707070",
        400: "#282A33",
        500: "#202124",
      },
      error: "#FF0000",
      success: "#00FF00",
      red: {
        100: "#c01151",
        200: "#b21b60",
        300: "#6d1641",
        400: "#ff3e9f",
      },
      purple: {
        100: "#bb13bf",
        200: "#b100c4",
        300: "#4a0254"
      },
      blue: {
        100: "#6565e4",
        200: "#4545da",
        300: "#2525ac"
      },
      bluegreen: {
        100: "#12a8cb",
        200: "#078ea4",
        300: "#006677"
      },
      green: {
        100: "#15cb67",
        200: "#0ca54a",
        300: "#037533"
      },
      yellow: {
        100: "#c2cb19",
        200: "#c6bd26",
        300: "#817e06"
      },
      orange: {
        100: "#cb731b",
        200: "#cc6a19",
        300: "#924906"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px",
    },
    fontFamily: {
      robotomono: ["Roboto-Mono", "san-serif"],
      arimo: ["Arimo"],
    },
    extend: {},
  },
  plugins: [],
};
