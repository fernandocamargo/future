import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

const URL = '/users';

const delay = type => (...params) =>
  new Promise((resolve, reject) =>
    window.setTimeout(() => ({ resolve, reject }[type](...params)), 5000)
  );

export default () => {
  const expertlead = useExpertlead();
  const create = useCallback(
    ({ user: { password }, token: invitationToken }) =>
      expertlead
        .post(URL, { invitationToken, password })
        .then(delay('resolve'))
        .catch(delay('reject')),
    [expertlead]
  );

  return { create };
};
