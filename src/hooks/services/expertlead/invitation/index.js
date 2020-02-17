import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default token => {
  const expertlead = useExpertlead();

  return useCallback(() => {
    const succeed = ({ data: { firstName, lastName, email } }) => ({
      name: `${firstName} ${lastName}`,
      email,
    });

    return expertlead.get(`/invitation/${token}`).then(succeed);
  }, [expertlead, token]);
};
