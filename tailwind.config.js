/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        vera: ["Lora", "serif"],
        lato: ["Lato", "sans-serif"],
        heading: ["Zhoro", "serif"],
        body: ["Visby", "sans-serif"],
        script: ["Autograph", "cursive"],
        arabic1: ["Jenine", "serif"],
        arabic2: ["Amiri", "serif"],
      },
      colors: {
        cocoa: "#391b00",
        marigold: "#e3a419",
        antique: "#f2e3d0",
        sunrise: "#ffeec7",
        borderglass: "#b59971",
      },
      boxShadow: {
        lux: "0 25px 60px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};