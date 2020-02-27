import { useCallback } from 'react';

import { useFileSystem } from 'hooks/clients';

export default () => {
  const { load } = useFileSystem();

  return useCallback(() => load(import('data/FAQ.json')), [load]);
};
