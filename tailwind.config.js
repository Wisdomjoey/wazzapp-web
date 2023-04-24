/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.2)'
      }
    },
    colors: {
      primary: '#a3ffea',
      primaryDark: '#009d79',
      secondary: '#2d3148',
      secondaryLight: '#3f4464',
      secondaryBorder: '#4f5781',
      darker: '#161824',
    },
  },
  plugins: [],
}

