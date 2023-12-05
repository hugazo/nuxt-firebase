module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
};
