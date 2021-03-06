const path = require('path');

const storybook = ['./storybook/**', './src/stories/**'];
const src = path.resolve(__dirname, 'src');

module.exports = {
  env: { browser: true, es6: true },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': { node: { paths: [src] } },
    'import/ignore': ['pckg'],
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
    'import/no-named-as-default': ['off'],
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
    'react/prop-types': ['warn'],
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
    'no-unused-vars': ['warn'],
    'no-use-before-define': ['error', { variables: false }],
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '&&': 'after', '||': 'after' } },
    ],
    'prefer-const': ['warn'],
  },
};
