/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Amiri": ["Amiri", ...defaultTheme.fontFamily.sans],
        "NunitoSans": ["Nunito Sans", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'xl': '80px'
      },
      lineHeight: {
        '90': '90px'
      },
      colors: {
        'orangeBright': '#ff4916',
        'orange': '#ff4a17',
        'slightGrey': '#222222',
        'greyText': '#616161',
        'navFooter': '#CCCCCC',
        'greyBackground': '#f5f5f5',
        'darkBlueBackground': '#14212b'
      },
      boxShadow: {
        'headerShadow': '5px 6px 30px 0 rgba(0, 0, 0, 0.12)'
      },
      backgroundImage: {
        // Home
        'squareBackground': "url('../public/assets/Home/offer_background.png')",
        'businessBackground': "url('../public/assets/Home/business_background.png')",
        'dynamicBk': "url('../public/assets/Home/logo_dynamic_grey.png')",
        'oktaBk': "url('../public/assets/Home/logo_okta_grey.png')",
        'maxBk': "url('../public/assets/Home/logo_max_grey.png')",
        'solanaBk': "url('../public/assets/Home/logo_solana_grey.png')",
        'detersBk': "url('../public/assets/Home/logo_deters_grey.png')",
        'honeyBk': "url('../public/assets/Home/logo_honey_grey.png')",
        'testimonialBackground': "url('../public/assets/Home/testimonial_background.jpg')",
        // About
        'noticeBackground': "url('../public/assets/About/background_landing.jpg')",
        'card01Background': "url('../public/assets/About/card_01.jpg')",
        'card02Background': "url('../public/assets/About/card_02.jpg')",
        'card03Background': "url('../public/assets/About/card_03.jpg')",
      }
    },
  },
  plugins: [],
}
