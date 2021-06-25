module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
};
