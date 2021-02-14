module.exports = {
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
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography')
  ],
}
