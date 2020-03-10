// fix cache (remove on the next change)
import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useFAQ } from 'hooks/services/fs';

const then = { services: (_, { data: services }) => services };

export default () => {
  const promise = useFAQ();
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
