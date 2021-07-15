module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      {
        ts: 'never',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-underscore-dangle': 'off',
  },
};
