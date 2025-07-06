/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      colors :{
        myblack : '#222222' ,
        mywhite : '#FFFFFF' ,
        mypurple : '#A09DFF',
        myblue : 'blue' ,
        purple : `purple`,
        mycustom : `linear-gradient(to right ,#008cff , #e100ff) `
      },
    },
  },
  plugins: [],
  darkMode : 'class'
}

