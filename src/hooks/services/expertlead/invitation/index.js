import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { getErrorByCode, check } from './helpers';
import messages from './messages';

export default token => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);

  return useCallback(
    () =>
      expertlead
        .get(`/invitation/${token}`)
        .catch(getErrorByCode)
        .then(check)
        .catch(error => Promise.reject(errors[error])),
    [expertlead, token, errors]
  );
};
