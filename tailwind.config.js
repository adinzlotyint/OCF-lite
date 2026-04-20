/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#F0F0F0",
        primary: "#212121",
        secondary: "#313131",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      gridTemplateRows: {
        layout: "125px auto",
        layout2: "65px auto 1fr",
        layoutContentPanel: "auto auto 1fr auto",
        layoutFormGridlg: "auto",
      },
      gridTemplateColumns: {
        layoutFormGrid:
          "minmax(150px, 2fr) minmax(150px, 2fr) 1fr 1fr 2fr auto",
        footerGrid: "15% 20% 5% 20% 5% 20% 15%",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        appear: "appear 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
