/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {},
    fontSize: {
      sm: ['12px', '14px'],
      base: ['15px', '24px'],
      standart: ['12px', '12px'],
      lg: ['20px', '18px'],
      xl: ['24px', '28px'],
    },
  },
  plugins: [],
}
