/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warna-primary-maroon': '#B23256',
        'warna-secondary-hijau': '#31AA75',
        'warna-layouting': '#ededed',
      },
    },
    fontFamily: {
      sans: ['Work Sans'],
    },
  },
  plugins: [],
};
