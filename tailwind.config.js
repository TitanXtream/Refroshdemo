/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "550px",
        "2xs": "300px",
        tab: "956px",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
