/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        dark: "#13131A",
        darksecondary: "#1C1C24",
        softdark: "#22222C",
        darkSoft: "#24242C",
        darkstroke: "#3A3A43",
        darkred: "#422C32",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        textIcons: "#A2A2A8",
        white: "#ffff",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#CCCC",
        lite: "#FCFCFD",
        erros: "#EB5757",
      },
      boxShadow: {
        sdPriamry: "10px_10px_20px_rgba(2,_2,_2,_0.25)",
      },
    },
  },
  plugins: [],
};
