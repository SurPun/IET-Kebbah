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
        "dim-gray": "#C9D0D7",
        "light-green": "#3C8880",
        "light-orange": "#e99510",
        "dim-green": "#4B7373",
        "dim-black": "#061523",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
