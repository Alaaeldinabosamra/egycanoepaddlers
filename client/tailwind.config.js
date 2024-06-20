/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primaryBeige': '#F5F5DC',
        'darkBeige': '#D9B99B',
        'brandPrimary': '#C30010',
        'brandDark': '#4D0000',
        'neutralGrey': '#717171',
        'neutralSilver': '#F5F7FA',
        "grayNav": "#18191F",
        'classicRed': '#FF0000',
        'fireEngineRed': '#CE2029',
        'cherryRed': '#FF004F',
        'roseRed': '#C21E56',
        'brickRed': '#C62D42',
        'fluffyRed': '#FF2c2c',
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
 
  plugins: [
    flowbite.plugin(),
  ],
};