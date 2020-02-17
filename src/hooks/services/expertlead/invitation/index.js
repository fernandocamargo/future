import { useCallback } from 'react';

import { useI18n } from 'hooks';
import { useExpertlead } from 'hooks/clients';

import messages from './messages';

export default token => {
  const expertlead = useExpertlead();
  const errors = useI18n(messages);

  return useCallback(() => {
    const succeed = ({ data: { firstName, lastName, email }, error }) => ({
      name: `${firstName} ${lastName}`,
      email,
    });
    const fail = ({
      response: {
        data: { code },
      },
    }) => Promise.reject(errors[code]);

    return expertlead
      .get(`/invitation/${token}`)
      .then(succeed)
      .catch(fail);
  }, [expertlead, token, errors]);
};
