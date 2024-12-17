/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#404040',
        },
        secondary: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        neutral: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#E0E0E0',
        }
      }
    },
  },
  plugins: [],
}