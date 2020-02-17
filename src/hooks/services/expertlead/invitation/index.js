import isEqual from 'lodash/isEqual';
import lowerCase from 'lodash/lowerCase';
import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

const ACTIVE = { response: { data: { code: 9 } } };

export default token => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);

  return useCallback(
    () =>
      expertlead
        .get(`/invitation/${token}`)
        .then(({ data: { firstName, lastName, email, status }, error }) =>
          isEqual(lowerCase(status), 'active')
            ? Promise.reject(ACTIVE)
            : { name: `${firstName} ${lastName}`, email }
        )
        .catch(({ response: { data: { code } } }) =>
          Promise.reject(errors[code])
        ),
    [expertlead, token, errors]
  );
};
