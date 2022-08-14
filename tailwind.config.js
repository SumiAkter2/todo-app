/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: ["cupcake", "dark", "light"],
  plugins: [require("daisyui")],
};
