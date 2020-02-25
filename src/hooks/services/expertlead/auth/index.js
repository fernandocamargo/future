import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

const URL = '/auth';

export default () => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);
  const translate = useCallback(
    ({
      response: {
        data: { message: code },
      },
    }) => Promise.reject(errors[code]),
    [errors]
  );
  const forgotPassword = useCallback(
    ({ email }) =>
      expertlead.post(`${URL}/forgot-password`, { email }).catch(translate),
    [expertlead, translate]
  );
  const login = useCallback(
    ({ credentials: { email, password } }) =>
      expertlead.post(URL, { email, password }).catch(translate),
    [expertlead, translate]
  );

  return { forgotPassword, login };
};
