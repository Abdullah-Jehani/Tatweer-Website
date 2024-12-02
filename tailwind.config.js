// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      colors: {
        main: "#000026",
        secondary: "#027EB5",
        navyBlue: "#1C1C4B",
        secondWhite: "#F2F2F2",
        strokeColor: "#CDE3ED",
        darkColor: "#001823",
        greenColor: "#00A563",
        greyColor: "#7E7E91",
        whiteColor: "#FCFCFC",
        cardColor: "#001D2A",
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
