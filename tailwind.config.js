/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx}',
    './src/screens/**/*.{js,jsx}',
    './src/App.jsx',
    './src/main.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "'Montserrat', sans-serif",
        alt: "'Source Sans Pro', sans-serif",
      },
      colors: {
        success: '#14e95f',
        info: '#007bce',
        warning: '#e7ba3c',
        error: '#ff353f',
      },
      boxShadow: {
        hard: '3px 3px 9px -6px rgba(0,0,0,.3)',
      },
    },
  },
  plugins: [],
};
