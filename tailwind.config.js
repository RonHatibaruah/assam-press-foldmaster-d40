/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        press: {
          dark: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          gold: '#f59e0b',
          teal: '#0d9488',
          emerald: '#10b981',
          danger: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}