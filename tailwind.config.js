/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#0B122A',
        searchIcon: '#5885E9',
      },
      backgroundImage: {
        homeHero: "linear-gradient(173.59deg, rgba(69, 100, 159, 0.78) 26.07%, rgba(0, 12, 52, 0.4446) 85.14%), url('/image/hero.png')",
      },
    },
  },
  plugins: [],
}
