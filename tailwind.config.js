// See https://tailwindcss.com/docs/configuration for details
const googleFonts = require("./content/theme/google_fonts.json")
const pallete = require("./content/theme/pallete.json")

module.exports = {
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: [
        googleFonts.sans.family,
        "Titillium Web",
        "HelveticaNeue-Light",
        "Helvetica Neue Light",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Lucida Grande",
        "sans-serif",
      ],
      serif: [googleFonts.serif.family, "sans-serif"],
    },
    extend: {
      colors: {
        ...pallete,
      },
    },
  },
  variants: {},
  plugins: [],
}
