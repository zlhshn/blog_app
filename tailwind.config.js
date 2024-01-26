/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C8FEF2",
        secondary: "#65C3AF",
        main: "#00323B",
        white: "#fff",
        dark: "#526D82",
        homeBg:"#daece8"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        grace: ["Covered By Your Grace", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        vibes: ["Great Vibes", "cursive"],
        badScript :["Bad Script", "cursive"]
      },
      boxShadow: {
        login: "2px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
