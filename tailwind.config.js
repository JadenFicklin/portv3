/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  screens: {
    gx: '270px',
    xs: '289px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },
  theme: {
    extend: {
      colors: {
        background: '#0A192F',
        green: '#5EEAD4',
        bubble: '#2DD4BF1a',
        light: '#FFFFFF99'
      }
    }
  },
  plugins: []
};
