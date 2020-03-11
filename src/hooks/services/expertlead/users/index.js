import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { format, getErrorByCode } from './helpers';
import messages from './messages';

const URL = '/users';

export default () => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);
  const create = useCallback(
    ({ user: { password }, token: invitationToken }) =>
      expertlead
        .post(URL, { invitationToken, password })
        .then(format)
        .catch(getErrorByCode)
        .catch(error => Promise.reject(errors[error])),
    [expertlead, errors]
  );

  return { create };
};
