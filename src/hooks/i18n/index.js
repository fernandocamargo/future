import { useCallback } from 'react';
import { useIntl } from 'react-intl';

export default (messages, references) => {
  const { formatMessage } = useIntl();
  const format = useCallback(
    (stack, [key, message]) =>
      Object.assign(stack, { [key]: formatMessage(message, references) }),
    [formatMessage, references]
  );

  return Object.entries(messages).reduce(format, {});
};
