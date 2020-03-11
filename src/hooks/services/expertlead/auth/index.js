import { useCallback } from 'react';

import { translateFrom } from 'helpers/response';
import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';
import { format } from './helpers';
import messages from './messages';

export default () => {
  const { post } = useExpertlead();
  const errors = useI18n(messages);
  const translate = useCallback(translateFrom({ errors }), [errors]);
  const login = useCallback(
    ({ credentials: { email, password } }) =>
      post(URL, { email, password })
        .then(format)
        .catch(translate),
    [post, translate]
  );
  const forgotPassword = useCallback(
    ({ email }) => post(`${URL}/forgot-password`, { email }).catch(translate),
    [post, translate]
  );

  return { forgotPassword, login };
};
