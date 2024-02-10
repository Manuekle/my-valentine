/* eslint-disable import/no-unresolved */
/** @type {import('tailwindcss').Config} */

// importando la libreria de nextui(interfaz de usuario)
// const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  darkMode: 'class', // modo escuro
  plugins: []
};
