const pluginSortImports = require('@ianvs/prettier-plugin-sort-imports')
const pluginTailwindcss = require('prettier-plugin-tailwindcss')

/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/config/(.*)$)|^(@/config$)',
    '^(@/utils/(.*)$)|^(@/utils$)',
    '^(@/lib/(.*)$)|^(@/lib$)',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [pluginSortImports, pluginTailwindcss],
}
