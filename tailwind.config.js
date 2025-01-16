/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myWhite: "#F9FAFB",
        myGray: "#F3F4F6",
        myDark: "#1F2937",
      }
    },
  },
  plugins: [],
}