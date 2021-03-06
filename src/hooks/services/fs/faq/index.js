import { useCallback } from 'react';

import { useFileSystem } from 'hooks/clients';

export default () => {
  const filesystem = useFileSystem();
  const load = useCallback(() => filesystem.load(import('data/FAQ.json')), [
    filesystem,
  ]);

  return { load };
};
