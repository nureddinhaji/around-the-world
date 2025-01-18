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
      },
      keyframes: {
        'bounce-x' : {
          '0%, 100%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-5px)'},
        }
      },
      animation: {
        'bounce-x': 'bounce-x 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}