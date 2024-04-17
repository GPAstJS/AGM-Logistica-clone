const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': {'max' : '1200px'},
      '3xl': '1201px',
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
});