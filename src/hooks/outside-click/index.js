import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';
import { useCallback, useEffect, useRef } from 'react';

import { isDescendant } from 'helpers/dom';

export default (handle, dependencies = []) => {
  const ref = useRef();
  const listen = useCallback(
    event => {
      const { target } = event;
      const { current: parent } = ref;

      return !isDescendant(target).of(parent) && handle(event);
    },
    [handle]
  );
  const intercept = useCallback(() => {
    window.addEventListener('click', listen, false);

    return () => window.removeEventListener('click', listen, false);
  }, [listen]);
  const active = isEqual(
    dependencies.filter(Boolean).length,
    dependencies.length
  );

  useEffect(active ? intercept : noop, [active]);

  return { ref };
};
