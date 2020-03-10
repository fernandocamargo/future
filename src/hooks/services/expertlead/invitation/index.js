import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import { checkByCode, checkByStatus } from './helpers';
import messages from './messages';

export default token => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);

  return useCallback(
    () =>
      expertlead
        .get(`/invitation/${token}`)
        .catch(checkByCode({ errors }))
        .then(checkByStatus({ errors })),
    [expertlead, token, errors]
  );
};
