/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px'
      },
      fontFamily: {
        "levenim": ["Levenim", "sans-serif"],
        "gothic": ["Gothic", "sans-serif"],
      },
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
          50: "#fffeea",
          100: "#fffbc5",
          200: "#fff786",
          300: "#ffed47",
          400: "#ffde1d",
          500: "#fdc311",
          600: "#e09400",
          700: "#ba6903",
          800: "#96510a",
          900: "#7c420b",
          950: "#472201",
        },
        black: "#252527",
        white: "#f5f5f6",
      },
      animation: {
        slide: "slide 40s infinite linear",
        sponsorsSlider: "sponsorSlide 12s infinite ease-in-out",
        slideGallery: "slide 60s infinite linear",
        error: "error .3s"
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        error: {
          "0%": { transform: "translateX(10px)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        sponsorSlide: {
          "0%, 20%": { transform: "translateX(0)" },
          "25%, 45%": { transform: "translateX(-11.25rem)" },
          "50%, 70%": { transform: "translateX(-22.5rem)" },
          "75%, 95%": { transform: "translateX(-33.75rem)" },
          "100%": { transform: "translateX(-45rem)" },
        },
      },
    },
  },
  plugins: [],
};
