module.exports = {
  content: [
    "./*.html",
    "./dist/js/*.js",
    "./dist/css/*.css",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc0000",
        kategoriHero: "rgba(232, 227, 227, .5)",
        ready:
          "linear-gradient(90deg, rgb(0 255 67) 0%, rgb(9 121 23) 75%, rgb(17 111 33) 100%)",
        sold: "#696969",
      },
      screens: {
        "3xl": "1955px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
