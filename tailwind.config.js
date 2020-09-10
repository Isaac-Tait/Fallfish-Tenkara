module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        red: {
          '500': '#D2132D',
        }
      }
    },
  },
  variants: {},
  plugins: [require("tailwindcss")],
}
