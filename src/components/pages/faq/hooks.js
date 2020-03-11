import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useFAQ } from 'hooks/services/fs';

export default () => {
  const load = useFAQ();
  const { data: faq, status, start, error } = usePromise({ promise: load });

  useEffect(() => {
    start();
  }, [start]);

  return {
    ...(!!faq && { valid: { faq } }),
    ...(!!error && { invalid: { error } }),
    status,
  };
};
