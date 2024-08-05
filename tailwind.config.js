/** @type {import('tailwindcss').Config} */
export default {
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
        layout: "150px 2fr 1fr",
        layout2: "100px 1fr 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
};
