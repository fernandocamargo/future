import { create } from 'axios';
import { useEffect, useMemo } from 'react';

import { fail } from 'helpers/response';
import { useAuthentication } from 'hooks';

import { getURL } from './helpers';

export default () => {
  const {
    profile: { accessToken: authorization },
  } = useAuthentication();
  const client = useMemo(
    () =>
      create({
        ...(authorization && { headers: { authorization } }),
        baseURL: getURL(),
      }),
    [authorization]
  );

  useEffect(() => {
    const {
      interceptors: { response },
    } = client;
    const interceptor = response.use(null, fail);

    return () => response.eject(interceptor);
  }, [client]);

  return client;
};
