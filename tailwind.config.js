module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        orange: "#fc804c",
        lightGreen: "#e7eef1",
        darkGreen: "#025657",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
