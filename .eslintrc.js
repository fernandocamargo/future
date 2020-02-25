const path = require('path');
const src = path.resolve(__dirname, 'src');

module.exports = {
  env: { browser: true },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': { node: { paths: [src] } },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
