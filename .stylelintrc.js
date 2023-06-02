module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-scss"],
  // ignoreFiles: ['src/styles/reset.scss', 'src/styles/common.scss'], // reset과 common scss는 ignore합니다.
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
