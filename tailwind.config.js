/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        col1 : ' #001524',
        col2: '#014c75',
        col3 : '#b3ccda',
        col4 : '#eeeeee',
        col5: 'b3ccda',
        col6: '#e8dcd2',
        col7 : "#f1356d"
      }
    },
  },
  plugins: [],
}