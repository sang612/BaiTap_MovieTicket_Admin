/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      scale: {
        200: "2.0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
