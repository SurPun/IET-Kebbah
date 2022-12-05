/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': "#e99510",
        'dim-gray': "#C9D0D7",
        'dark-green': '#1A414B',
        'light-green': '#3C8880',
        'dim-green': '#4B7373',
      },
    },
  },
  plugins: [],
};

