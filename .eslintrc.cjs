/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser', // Use the parser from `vue-eslint-parser`
  parserOptions: {
    parser: '@typescript-eslint/parser', // Parse TypeScript with `@typescript-eslint/parser`
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint' // Use the TypeScript plugin
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    // Add or override TypeScript-specific rules here
  }
}
