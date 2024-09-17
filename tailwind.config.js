const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4a5568',
          DEFAULT: '#2d3748',
          dark: '#1a202c',
        },
        secondary: {
          light: '#718096',
          DEFAULT: '#4a5568',
          dark: '#2d3748',
        },
        accent: {
          light: '#ed8936',
          DEFAULT: '#dd6b20',
          dark: '#c05621',
        },
        neutral: {
          light: '#e2e8f0',
          DEFAULT: '#a0aec0',
          dark: '#718096',
        },
        code: {
          light: '#fbd38d',
          DEFAULT: '#f6ad55',
          dark: '#ed8936',
        },
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({

        // Header Components
        '.header': {
          '@apply flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-primary-dark text-neutral-light': {},
        },
        '.header-container': {
          '@apply flex items-center justify-between w-full': {},
        },
        '.logo': {
          '@apply text-accent-light text-2xl hover:text-accent-dark transition duration-300': {},
        },
        '.nav-link': {
          '@apply py-2 text-neutral-light hover:text-accent-light md:hover:border-b-2 hover:border-accent-light transition duration-300': {},
        },

        
      })
    }),
  ],
}
