/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'light-blue': '#47b4cd',
      'cyan': '#00dddd',
      'gray': '#808080',
    },
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [],
}

