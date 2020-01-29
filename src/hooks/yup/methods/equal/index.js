import isEqual from 'lodash/isEqual';
import { useCallback } from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

export default yup => {
  const { message } = useI18n(messages);
  const method = useCallback(
    function({ field, ...params }) {
      const test = function(value) {
        return !value || isEqual(value, this.resolve(yup.ref(field)));
      };

      return this.test({
        params: { field, ...params },
        name: 'equal',
        test,
        message,
      });
    },
    [yup, message]
  );

  return [yup.mixed, method];
};
