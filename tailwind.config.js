/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '290px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px'
    },
    extend: {
      colors: {
        background: '#0F172A',
        green: '#5EEAD4',
        bubble: '#2DD4BF1a',
        medium: '#e2e8f0',
        light: '#94a3b8',
        lightDarker: '#64748B',
        mobileNavBg: '#0f172abf'
      }
    }
  },
  plugins: []
};
