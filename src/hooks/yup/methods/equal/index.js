import isEqual from 'lodash/isEqual';

import { useI18n } from 'hooks';

import messages from './messages';

export default yup => {
  const { error } = useI18n(messages);

  return [
    yup.mixed,
    function(name) {
      const test = function(value) {
        return isEqual(value, this.resolve(yup.ref(name)));
      };

      return this.test({
        params: { name },
        message: error,
        name: 'equal',
        test,
      });
    },
  ];
};
