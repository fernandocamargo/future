import { useCallback } from 'react';

import { useExpertlead } from 'hooks/clients';

export default token => {
  const expertlead = useExpertlead();

  return useCallback(() => {
    const succeed = ({ data: { firstName, lastName, email }, error }) => ({
      name: `${firstName} ${lastName}`,
      email,
    });
    const fail = ({ message }) => Promise.reject(message);

    return expertlead
      .get(`/invitation/${token}`)
      .then(succeed)
      .catch(fail);
  }, [expertlead, token]);
};
