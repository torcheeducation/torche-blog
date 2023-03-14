/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#0B122A',
        searchIcon: '#5885E9',
        trendingpost: '#F5F7FF',
        blueDate: '#5885E9',
        orangeLight: '#FF6442',
      },
      backgroundImage: {
        homeHero: "linear-gradient(173.59deg, rgba(69, 100, 159, 0.78) 26.07%, rgba(0, 12, 52, 0.4446) 85.14%), url('/image/hero.png')",
        gradientHero: "url('/image/herogradient.png')"
      },
      fontFamily: {
        rajdhaniMedium: '"Rajdhani Medium", sand-serif',
        rajdhaniBold: '"Rajdhani Bold", sans-serif'
      },
      dropShadow: {
        blue: [
          '0 20px 13px rgb(88, 133, 233 / 0.7)', 
          '0 8px 5px rgb(88, 133, 233 / 0.8)',
        ],
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
}
