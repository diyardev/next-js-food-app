import {nextui} from "@nextui-org/react";


module.exports = {
  
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'none': 'none',
      },
      container: {
        screens: {
          xxs : "350px",
          xs : "475px",
          sm : "640px",
          md : "768px",
          lg : "1024px",
          xl : "1170px",
          "2xl" : "1170px"
        }
      },
      colors : {
        primary : "#FFBE33",
        secondary : "#222831",
      },
      fontFamily : {
        dancing : ["Dancing Script", 'cursive'],
        raleway : ['Raleway', "sans-serif"]
      }
    },
  },
  darkMode: "dark",
  plugins: [
    nextui()
  ],
}