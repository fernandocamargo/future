const path = require('path');
const src = path.resolve(__dirname, 'src');

module.exports = {
  env: { browser: true, es6: true },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': { node: { paths: [src] } },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', json: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['./storybook/**', './src/stories/**'] },
    ],
    'import/prefer-default-export': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': ['off'],
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': ['error', 'after'],
  },
};
