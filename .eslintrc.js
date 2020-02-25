const path = require('path');
const src = path.resolve(__dirname, 'src');

module.exports = {
  env: { browser: true },
  settings: {
    'import/resolver': { node: { paths: [src] } },
  },
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
