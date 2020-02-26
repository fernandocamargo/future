import { useI18n, useYup } from 'hooks';

import { isValid } from './helpers';
import messages from './messages';

export default () => {
  const { string } = useYup();
  const { message } = useI18n(messages);

  return string()
    .trim()
    .min(3)
    .max(50)
    .test('valid', message, isValid);
};
