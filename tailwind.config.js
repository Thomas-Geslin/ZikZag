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
        /* Home01 */
        'Home1FirstSlide': "url('../public/assets/Home01/landing_slide_1.jpg')",
        'Home1SecondSlide': "url('../public/assets/Home01/landing_slide_2.jpg')",
        'Home1ThirdSlide': "url('../public/assets/Home01/landing_slide_3.jpg')",
        /* Home02 */
        'squareBackground': "url('../public/assets/Home02/offer_background.png')",
        'businessBackground': "url('../public/assets/Home02/business_background.png')",
        // Offer Icon
        'reportIcon': "url('../public/assets/Home02/offer_icon_report_color.png')",
        'moneyIcon': "url('../public/assets/Home02/offer_icon_money_color.png')",
        'statIcon': "url('../public/assets/Home02/offer_icon_stat_color.png')",
        'rocketIcon': "url('../public/assets/Home02/offer_icon_rocket_color.png')",
        'paymentIcon': "url('../public/assets/Home02/offer_icon_payment_color.png')",
        'balanceIcon': "url('../public/assets/Home02/offer_icon_balance_color.png')",
        // Brand Slider
        'dynamicBk': "url('../public/assets/Home02/logo_dynamic_grey.png')",
        'oktaBk': "url('../public/assets/Home02/logo_okta_grey.png')",
        'maxBk': "url('../public/assets/Home02/logo_max_grey.png')",
        'solanaBk': "url('../public/assets/Home02/logo_solana_grey.png')",
        'detersBk': "url('../public/assets/Home02/logo_deters_grey.png')",
        'honeyBk': "url('../public/assets/Home02/logo_honey_grey.png')",
        'testimonialBackground': "url('../public/assets/Home02/testimonial_background.jpg')",
        /* Home03 */
        // Landing
        // Division 
        'Home03DivisionBackground': "url('../public/assets/Home03/division_background.png')",
        // Contact
        'Home03Contact': "url('../public/assets/Home03/contact_background.png')",
        /* Home05 */
        // Landing
        'dynamicBkGrey': "url('../public/assets/Home05/landing_partner_1_grey.png')",
        'oktaBkGrey': "url('../public/assets/Home05/landing_partner_2_grey.png')",
        'maxBkGrey': "url('../public/assets/Home05/landing_partner_3_grey.png')",
        'solanaBkGrey': "url('../public/assets/Home05/landing_partner_4_grey.png')",
        'detersBkGrey': "url('../public/assets/Home05/landing_partner_5_grey.png')",
        'honeyBkGrey': "url('../public/assets/Home05/landing_partner_6_grey.png')",
        // Offer
        'Home05Offer': "url('../public/assets/Home05/benefits_line_1.png')",
        /* Home06 */
        // Landing
        'Home06Landing': "url('../public/assets/Home06/landing_background.jpg')",
        'Home06Success': "url('../public/assets/Home06/success_background.jpg')",
        'Home06Help': "url('../public/assets/Home06/help_background.jpg')",
        /* About */
        'noticeBackground': "url('../public/assets/PAGES/About/background_landing.jpg')",
        'card01Background': "url('../public/assets/PAGES/About/card_01.jpg')",
        'card02Background': "url('../public/assets/PAGES/About/card_02.jpg')",
        'card03Background': "url('../public/assets/PAGES/About/card_03.jpg')",
        /* Contact */
        'contactBackground': "url('../public/assets/Contacts/background.jpg')",
        /* OurServices */
        'ourServicesBackground': "url('../public/assets/PAGES/OurServices/background.jpg')",
        /* OurTeam */
        'ourTeamBackground': "url('../public/assets/PAGES/OurTeam/background.jpg')",
        /* SingleTeam */
        'singleTeamBackground': "url('../public/assets/PAGES/SingleTeam/background.jpg')",
        /* Value */
        'valueTeamBackground': "url('../public/assets/PAGES/Value/background.jpg')",
        /* Elements */
        'elementsTeamBackground': "url('../public/assets/PAGES/Elements/background.jpg')",
        /* Typography */
        'typographyTeamBackground': "url('../public/assets/PAGES/Typography/background.jpg')",
        /* FAQ */
        'faqTeamBackground': "url('../public/assets/PAGES/FAQ/background.jpg')",
        /* ComingSoon */
        'comingTeamBackground': "url('../public/assets/PAGES/ComingSoon/background.jpg')",
        /* 404 */
        '404Background': "url('../public/assets/PAGES/Page404/background.jpg')",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'max-xl': {'max': '1280px'},

        'min-xl': '1280px',

        'max-2xl': {'max': '1650px'},

        '1060': {'max': '1060px'},

        '850': {'max': '850px'},

        '650': {'max': '650px'},

        '430': {'max': '430px'},
      }
    },
  },
  plugins: [],
}
