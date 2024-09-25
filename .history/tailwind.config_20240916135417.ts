/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      textBlack: "#1d1d1f",
      white: "#fff",
    },
    fontFamily: {
      sans: ["SF Pro Display"],
    },
    fontSize: {
      "12": "0.75rem",
      "14": "0.875rem",
      "17": "1.0625rem",
      "19": ["1.1875rem", "1.21"],
      "21": "1.3125rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "40": ["2.5rem", "1.1"],
      "72": ["4.5rem", "1.05"],
    },
    extend: {},
  },
  plugins: [],
};