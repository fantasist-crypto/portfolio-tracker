module.exports = {
  root: true,
  extends: [
    'prettier',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}
