'use strict';

const first = require('lodash/first');
const extract = require('extract-react-intl-messages');
const { bgGreen, bgRed, bgWhite, red, white } = require('chalk');

const locales = ['en-US', 'de-DE', 'pt-BR'];
const defaultLocale = first(locales);
const pattern = './src/**/messages.js';
const buildDir = './src/translations';
const success = () => console.log(bgGreen(white('success')));
const fail = reason => console.log(bgRed(white('fail')), bgWhite(red(reason)));

module.exports = extract(locales, pattern, buildDir, { defaultLocale })
  .then(success)
  .catch(fail);
