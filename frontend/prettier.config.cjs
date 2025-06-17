// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '', '<THIRD_PARTY_MODULES>', '', '^[.]'],
  importOrderSeparation: true,
};
