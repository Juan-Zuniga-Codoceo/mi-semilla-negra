/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Negro
          light: '#404040',
        },
        secondary: {
          DEFAULT: '#4CAF50', // Verde
          light: '#81C784',
          dark: '#388E3C',
        },
        neutral: {
          DEFAULT: '#FFFFFF', // Blanco
          light: '#F5F5F5',
          dark: '#E0E0E0',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
        'slight-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      animation: {
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slight-bounce': 'slight-bounce 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}