import { useCallback } from 'react';

import Error from 'error';
import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { URL } from './constants';
import { format, getErrorByCode } from './helpers';
import messages from './messages';

export default () => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);
  const create = useCallback(
    ({ user: { password }, token: invitationToken }) =>
      expertlead
        .post(URL, { invitationToken, password })
        .then(format)
        .catch(getErrorByCode)
        .catch(code => {
          throw new Error({ message: errors[code] });
        }),
    [expertlead, errors]
  );

  return { create };
};
