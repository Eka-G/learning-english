module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['prettier'],
  overrides: [
    {
      files: ['*.ts'],
      env: {
        browser: true,
        es2021: true,
      },
      extends: ['eslint:recommended', 'airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        'import/ignore': [/.html$/],
      },
      rules: {
        'no-new': 0,
      },
    },
  ],
};
