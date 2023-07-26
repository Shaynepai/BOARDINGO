/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary:'#ff9000',
        secondary: 'White',
        third: '#F1C27B',
        fourth: 'Black',
        fifth: '#DAFFFB',
        sixth: '#FFD0D0',
        seventh: '#0c4789',
        borderclr:'#ff9000',
        // 
        headercolor: '#45688f',
      },
    },
  },
  plugins: [],
}


