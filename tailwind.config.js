/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      minHeight: {
        "85vh": "85vh",
        "900px": "900px",
        "200px": "200",
      },
    },
  },
  plugins: [],
};
