import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useServices } from 'hooks/services/fs';

const then = { services: (_, { data: services }) => services };

export default () => {
  const promise = useServices();
  const {
    context: { services },
    value: condition,
    start,
    error,
  } = usePromise({ promise, then });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { services }, invalid: { error }, condition };
};
