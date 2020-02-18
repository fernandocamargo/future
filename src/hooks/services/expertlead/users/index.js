import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

const URL = '/users';

export default () => {
  const expertlead = useExpertlead();
  const create = useCallback(
    ({ user: { password }, token: invitationToken }) =>
      expertlead.post(URL, { invitationToken, password }),
    [expertlead]
  );

  return { create };
};
