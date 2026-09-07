/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom duration tweaks for your counters and cards
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate") // 🚀 This activates the animate-in framework!
  ],
}