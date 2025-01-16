/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '579px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        myShadow: '0px 2px 9px 0px #0000000E',
      }
    },
  },
  plugins: [],
}