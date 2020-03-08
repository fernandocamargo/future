import { create } from 'axios';
import { useEffect, useMemo } from 'react';

import { getURL, fail } from './helpers';

export default () => {
  const client = useMemo(() => create({ baseURL: getURL() }), []);

  useEffect(() => {
    const {
      interceptors: { response },
    } = client;
    const interceptor = response.use(null, fail);

    return () => response.eject(interceptor);
  }, [client]);

  return client;
};
