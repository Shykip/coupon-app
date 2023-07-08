/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "web-dark": '#080E14',
        "web-grey": '#595959',
        "web-aqua": '#B7E6ED'
      }
    },
    fontFamily: {
      Nunito: ["Nunito, sans-serif"]
    },
    // container: {
    //   padding: "18vw",
    //   width: "100vw"
    // // },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1440px"
    // }
  },
  plugins: [],
}

