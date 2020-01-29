import { useYup } from 'hooks';

import { useI18n } from 'hooks';

import { isValid } from './helpers';
import messages from './messages';

export default () => {
  const { string } = useYup();
  const { valid } = useI18n(messages);

  return string()
    .trim()
    .min(3)
    .max(50)
    .test('valid', valid, isValid);
};
