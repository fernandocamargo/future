import { useCallback } from 'react';

export default () =>
  useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }),
    []
  );
