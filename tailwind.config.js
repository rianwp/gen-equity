/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    
    extend: {
      backgroundImage:{
        'home': "url('../public/img/bghome.svg')"
      }
    },
  },
  plugins: [],
}
