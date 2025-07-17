/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Old Standard TT"', 'serif'],
        secondary: ['Heebo', 'sans-serif'],
      },
      colors: {
        primary: '#523C1E',    // Brown
        secondary: '#FAF7F0',  // Cream
        tertiary: '#2B2024',   // Dark Charcoal
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
