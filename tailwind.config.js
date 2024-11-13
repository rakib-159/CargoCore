/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor:"#3A3C3F", 
        primaryColor:"#FE4711",
        borderColor: "#E5E7E8",
      },
      spacing: {
        pageXL:"80px",
      },


      fontFamily: {
        myCour: "Courgette"
      }




    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
