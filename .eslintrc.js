const path = require('path');
const src = path.resolve(__dirname, 'src');
const pckg = 'pckg';
const storybook = ['./storybook/**', './src/stories/**'];

module.exports = {
  env: { browser: true, es6: true },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': { node: { paths: [src] } },
    'import/ignore': [pckg],
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', json: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: storybook },
    ],
    'import/prefer-default-export': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      { functions: 'never', objects: 'always-multiline' },
    ],
    'implicit-arrow-linebreak': ['off'],
    'linebreak-style': ['off'],
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '&&': 'after', '||': 'after' } },
    ],
  },
};
