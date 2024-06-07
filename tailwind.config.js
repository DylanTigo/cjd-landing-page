/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Levenim MT", "sans-serif"],
      century: ["Century", "sans-serif"],
    },
    extend: {
      colors: {
        "jungle-green": {
          50: "#edfcf6",
          100: "#d3f8e8",
          200: "#abefd6",
          300: "#74e1c0",
          400: "#3ccba4",
          500: "#17a784",
          600: "#0c8f72",
          700: "#0a725e",
          800: "#0a5b4b",
          900: "#0a4a3f",
          950: "#042a24",
        },
        "dove-gray": {
          50: "#f5f5f6",
          100: "#e6e6e7",
          200: "#d0d0d1",
          300: "#afb0b1",
          400: "#86878a",
          500: "#6d6e71",
          600: "#5b5c5f",
          700: "#4e4f50",
          800: "#444446",
          900: "#3c3c3d",
          950: "#252527",
        },
        "lightning-yellow": {
          50: "#fffbeb",
          100: "#fff4c6",
          200: "#feea89",
          300: "#fed84b",
          400: "#fdc31a",
          500: "#f7a509",
          600: "#db7c04",
          700: "#b65707",
          800: "#93430d",
          900: "#79380e",
          950: "#461c02",
        },
        black: "#252527",
        white: "#f5f5f6",
      },
      animation: {
        slide: "slide 40s infinite linear",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
