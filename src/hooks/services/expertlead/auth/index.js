import { useCallback } from 'react';

import Error from 'error';
import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

const URL = '/auth';

export default () => {
  const { post } = useExpertlead();
  const errors = useI18n(messages);
  const translate = useCallback(
    ({
      response: {
        data: { message: code },
      },
    }) => {
      throw new Error({ message: errors[code], code });
    },
    [errors]
  );
  const forgotPassword = useCallback(
    ({ email }) => post(`${URL}/forgot-password`, { email }).catch(translate),
    [post, translate]
  );
  const login = useCallback(
    ({ credentials: { email, password } }) =>
      post(URL, { email, password }).catch(translate),
    [post, translate]
  );

  return { forgotPassword, login };
};
