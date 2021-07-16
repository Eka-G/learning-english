module.exports = {
  extends: ['airbnb-typescript', 'react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    'react/react-in-jsx-scope': [0],
    'no-underscore-dangle': 'off',
  },
};
