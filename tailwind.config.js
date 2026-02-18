/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0ede6',
          200: '#ddd6c6',
          300: '#c7b89e',
          400: '#ae9574',
          500: '#9a7a54',
          600: '#846443',
          700: '#6d5037',
          800: '#5a422f',
          900: '#4c3629',
          950: '#291c14',
        },
        accent: {
          gold: '#c9a962',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
