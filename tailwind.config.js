/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        btnColor: "#ff6347",
        hoverColor: "#ff4500"


 
      },
      spacing: {
        xPadding: "60px",
        xPadding2: "20px",
        myMargin: "80px",
        titleMargin: "30px",
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




