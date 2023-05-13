/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/*.js"
  ],
  theme: {
    fontFamily :{
      'sans': ['Montserrat', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif'],

    },
    extend: {

      backgroundImage: {
        'hero-pattern': "url('/images/')"
      },
      colors : {
        "deep-blue" : "#3d33a4",
        "deeper-blue" : "#362995",
        "deeper-black" : "#262431",
        "deep-black" : "#25232f",
        "light-black" : "#2f2c3d",
        "light-aqua"  : "#00c9db"

      }
    },
  },
  plugins: [],
}

