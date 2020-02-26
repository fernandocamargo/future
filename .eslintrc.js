const path = require('path');
const src = path.resolve(__dirname, 'src');

module.exports = {
  env: { browser: true, es6: true },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': { node: { paths: [src] } },
  },
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': ['off'],
  },
};
