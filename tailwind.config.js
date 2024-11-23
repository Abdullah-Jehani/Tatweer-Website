// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: "#000026",
        secondary: "#027EB5",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
