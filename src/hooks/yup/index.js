import * as yup from 'yup';

import invoke from 'helpers/object/reduce/hook';

import * as locales from './locales';

export default () => {
  yup.setLocale(invoke(locales));

  return yup;
};
