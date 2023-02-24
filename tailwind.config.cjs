/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        sm: "240px",
      },
      colors: {
        "light-blue": "#e4f5ff",
      },
      fontFamily: {
        open: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
