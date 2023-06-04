module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
