/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "auto",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5" /* 콤마 붙이는 설정 */,
  /**
   * npm i -D @trivago/prettier-plugin-sort-imports
   * ^[./] : 작성된 것들이 아닌 나머지
   * <THIRD_PARTY_MODULES>는 외부 라이브러리 위치
   */
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^@components/(.*)$",
    "^@lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^[./]",
  ],
  importOrderSeparation: true /* 각 범주마다 공백 줄지 말지 */,
  importOrderSortSpecifiers: true /* 설정한 범주 내에서 정렬을 할지 말지를 결정 */,
  importOrderBuiltinModulesToTop: true,
};
