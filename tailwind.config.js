/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./images/background-home-desktop.jpg')",
        tablet: "url('/images/background-home-tablet.jpg')",
        mobile: "url('/images/background-home-mobile.jpg')",
        'destination-desktop':"url('./images/destination/background-destination-desktop.jpg')",
        'destination-tablet':"url('./images/destination/background-destination-tablet.jpg')",
        'destination-mobile':"url('./images/destination/background-destination-mobile.jpg')",
        'crew-desktop':"url('./images/crew/background-crew-desktop.jpg')",
        'crew-tablet':"url('./images/crew/background-crew-tablet.jpg')",
        'crew-mobile':"url('./images/crew/background-crew-mobile.jpg')",
        'tech-desktop':"url('./images/tech/background-technology-desktop.jpg')",
        'tech-tablet':"url('./images/tech/background-technology-tablet.jpg')",
        'tech-mobile':"url('./images/tech/background-technology-mobile.jpg')",
      },
      backgroundColor : {
          primary: "#0B0D17",
          secondary: "#D0D6F9",
      },
      textColor : {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
    },
  },
  plugins: [],
}

