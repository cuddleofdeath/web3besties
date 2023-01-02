/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ea4f92',

          secondary: '#472999',

          accent: '#d81ea7',

          neutral: '#29232F',

          'base-100': '#F5F5F5',
          'navbar-100': 'red',

          info: '#54B3D9',

          success: '#2AC08E',

          warning: '#F3C562',

          error: '#DD4055',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
