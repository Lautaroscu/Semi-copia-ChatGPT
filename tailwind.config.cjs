/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gptdarkgray: '#202123',
        gptgray: '#343541',
        gptligthgray: '#444654'
      }
    }
  },
  plugins: []
}
