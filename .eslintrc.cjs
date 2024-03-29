module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    '@nuxt/eslint-config',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['functions/dist/**/*'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      files: ['server/**/*.ts'],
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['middleware/**/*.ts'],
      rules: {
        'consistent-return': 0,
      },
    },
  ],
};
