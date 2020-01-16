import isEqual from 'lodash/isEqual';
import lowerCase from 'lodash/lowerCase';
import noop from 'lodash/noop';
import { useCallback, useEffect } from 'react';

export default (shortcuts, dependencies = []) => {
  const listen = useCallback(
    event =>
      Object.entries(shortcuts).forEach(
        ([key, shortcut]) =>
          isEqual(lowerCase(key), lowerCase(event.key)) && shortcut(),
        []
      ),
    [shortcuts]
  );
  const intercept = useCallback(() => {
    window.addEventListener('keydown', listen, false);

    return () => window.removeEventListener('keydown', listen, false);
  }, [listen]);
  const active = isEqual(
    dependencies.filter(Boolean).length,
    dependencies.length
  );

  return useEffect(active ? intercept : noop, [active]);
};
