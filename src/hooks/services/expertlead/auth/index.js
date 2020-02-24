import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

const URL = '/auth';

export default () => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);
  const login = useCallback(
    ({ credentials: { email, password } }) =>
      expertlead
        .post(URL, { email, password })
        .catch(({ response: { data: { message: code } } }) =>
          Promise.reject(errors[code])
        ),
    [expertlead, errors]
  );

  return { login };
};
