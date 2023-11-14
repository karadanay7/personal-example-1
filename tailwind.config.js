const colors = require("tailwindcss/colors");

/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.violet[700],
          ...colors.violet,
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.6, 0.5)  ",
        spin: "spin 1s linear ",
        slide: "slide 3s linear infinite ",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "-270px",
          },
          "5%, 33%": {
            "margin-top": "-180px",
          },
          "38%, 66%": {
            "margin-top": "-90px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
      },
    },
  },
};
