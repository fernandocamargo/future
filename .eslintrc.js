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
    'import/no-cycle': ['off'],
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
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'function-paren-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'linebreak-style': ['off'],
    'no-confusing-arrow': ['off'],
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '&&': 'after', '||': 'after' } },
    ],
  },
};
