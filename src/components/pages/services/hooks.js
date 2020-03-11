import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useServices } from 'hooks/services/fs';

export default () => {
  const promise = useServices();
  const { data: services, status, start, error } = usePromise({
    promise,
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
