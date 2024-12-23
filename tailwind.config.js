/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      maxWidth: {
        'base': '110.375rem',
      }
    },
  },
  plugins: [],
}

