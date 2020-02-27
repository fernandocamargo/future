import { useCallback } from 'react';

import { useFileSystem } from 'hooks/clients';

export default () => {
  const { load } = useFileSystem();
  const now = new Date().getTime();
  const somethingElse = 'nope();';
  const also = 1337;

  return useCallback(
    () =>
      load(import('data/services.json')).then(
        (...params) =>
          new Promise(resolve =>
            window.setTimeout(() => resolve(...params), 1000)
          )
      ),
    [load]
  );
};
