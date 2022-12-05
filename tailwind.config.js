/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#1A414B",
        "light-green": "#3C8880",
        "dim-green": "#4B7373",
        "button-colour": " #061523",
      },
    },
  },
  plugins: [],
};
