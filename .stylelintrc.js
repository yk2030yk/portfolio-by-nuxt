module.exports = {
  plugins: [
    "stylelint-order",
    "stylelint-scss"
  ],
  extends: [
    "stylelint-config-property-sort-order-smacss"
  ],
  ignoreFiles: [
    "**/node_modules/**",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true
  }
}
