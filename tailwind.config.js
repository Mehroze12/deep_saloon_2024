/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../src/assets/images/herosec.png')",
      },
      colors: {
        secondaryColor: "#161616",
        placeHolder:"#A0A4AC",
        borderColor:'#CCCCCC',
        socialColor:'#313957',
        textRedColor:'#E91E1E',
        primaryColor: "#e1c45b", 
        blackColor: "#000000",
        whiteColor: "#ffffff", 
        grayColor2: "#2a2e39",
        darkYellowColor: "#473a12",
        YellowColor: "#d0a704",
        redColor: "#ff4040",
        greenColor: "#4caf50",
        goldColor: "#D4AF37",
        offwhite: "#F2F2F2",
        lightwhite: "#FAFAFA",
        gray: "#343434",
        lightblack: "#061C3D",
        text: "#CACACA",
        lableColor: "#A2A2A2"
      },
      boxShadow: {
        shadow1: "0 10px 50px -10px rgba(0, 0, 0, 0.3)",
        shadow2: "0 10px 50px -11px rgba(51, 51, 51, 0.3)",
      },
      fontWeight: {
        normal: "400", // Normal weight
        semiBold: "600", // Semi-bold weight
        bold: "700", // Bold weight
      },
      animation: {
        "infinite-scroll": "infinite-scroll 55s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translatex(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },

    screens: {
      xs: "300px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};