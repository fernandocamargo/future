import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

const URL = '/users';

export default () => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);
  const create = useCallback(
    ({ user: { password }, token: invitationToken }) =>
      expertlead
        .post(URL, { invitationToken, password })
        .catch(({ response: { data: { code } } }) =>
          Promise.reject(errors[code])
        ),
    [expertlead, errors]
  );

  return { create };
};
