import { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { traverse } from 'helpers/object';

export default messages => {
  const { formatMessage } = useIntl();
  const translate = useCallback(
    // message => console.log({ message }) || formatMessage(message),
    (...params) => console.log({ params }) || params[0],
    [formatMessage]
  );

  console.log(123, JSON.stringify({ messages }, null, 2));
  console.log(456, traverse(messages).map(translate));

  return messages;
};
