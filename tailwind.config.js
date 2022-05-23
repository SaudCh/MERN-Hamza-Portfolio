const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Segoe UI', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#DC6365',
        secondary: '#2D6460',
      },
    },
  },
  plugins: [],
};
