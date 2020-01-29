import { useI18n, useYup } from 'hooks';

import messages from './messages';

const ACCEPTABLE = [true];

export default () => {
  const { boolean } = useYup();
  const { message } = useI18n(messages);

  return boolean().oneOf(ACCEPTABLE, message);
};
