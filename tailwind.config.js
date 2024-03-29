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
        'home': "url('../public/img/bghome.svg')",
        'materi1': "url('../public/img/bgmateri1.svg')", //source: https://www.pngegg.com/id/png-bhnus/download
        'materi2': "url('../public/img/bgmateri2.svg')", //source: https://www.pngegg.com/id/png-dippg/download
        'materi3': "url('../public/img/bgmateri3.svg')",
      }
    },
  },
  plugins: [],
}
