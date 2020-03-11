import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useServices } from 'hooks/services/fs';

export default () => {
  const load = useServices();
  const { data: services, status, start, error } = usePromise({
    promise: load,
  });

  useEffect(() => {
    start();
  }, [start]);

  return {
    ...(!!services && { valid: { services } }),
    ...(!!error && { invalid: { error } }),
    status,
  };
};
