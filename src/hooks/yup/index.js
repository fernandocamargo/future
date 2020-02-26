import * as yup from 'yup';

import invoke from 'helpers/object/reduce/hook';

import * as locales from './locales';
import * as methods from './methods';

export default () => {
  yup.setLocale(invoke(locales));

  Object.entries(methods).forEach(([name, useMethod]) => {
    const [schema, method] = useMethod(yup);

    yup.addMethod(schema, name, method);
  });

  return yup;
};
