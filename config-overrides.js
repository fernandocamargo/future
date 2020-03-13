const path = require('path');
const { override, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc());
