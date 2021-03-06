// fix cache
import { useI18n, useYup } from 'hooks';

import messages from './messages';

export default () => {
  const { mixed } = useYup();
  const { message } = useI18n(messages);

  return mixed().nullable(false, message);
};
