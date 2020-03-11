import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useFAQ } from 'hooks/services/fs';

export default () => {
  const faq = useFAQ();
  const { resolve: load, status, data, error } = usePromise({
    promise: faq.load,
  });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(!!faq && { valid: { faq: data } }),
    ...(!!error && { invalid: { error } }),
    status,
  };
};
