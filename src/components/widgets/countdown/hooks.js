import noop from 'lodash/noop';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { decrease } from 'helpers/number';

export const useCountdown = ({ from }) => {
  const [counter, setCounter] = useState(from);
  const intercept = useCallback(() => {
    const timeout = window.setInterval(() => setCounter(decrease), 1000);

    return () => window.clearInterval(timeout);
  }, [setCounter]);
  const active = useMemo(() => !!Math.max(counter, 0), [counter]);

  useEffect(active ? intercept : noop, [active]);

  return counter;
};
