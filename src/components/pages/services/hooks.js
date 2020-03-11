import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useServices } from 'hooks/services/fs';

export default () => {
  const services = useServices();
  const { resolve: load, status, data, error } = usePromise({
    promise: services.load,
  });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(!!services && { valid: { services: data } }),
    ...(!!error && { invalid: { error } }),
    status,
  };
};
