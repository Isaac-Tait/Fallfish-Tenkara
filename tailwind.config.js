module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
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
