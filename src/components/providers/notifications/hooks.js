/*
import { useCallback, useContext, useMemo, useState } from 'react';

import { Notifications } from 'contexts';

import * as reducers from './reducers';

export const useNotifications = () => {
  const [state, setState] = useState(new Map());
  const register = useCallback(uuid => setState(reducers.register(uuid)), []);
  const show = useCallback(() => {}, []);
  const deregister = useCallback(
    uuid => console.log('deregister();', { uuid }),
    []
  );
  const value = useMemo(() => ({ register, show, deregister }), [
    register,
    show,
    deregister,
  ]);
  const items = useMemo(() => [], []);

  console.log({ state });

  return { state, value, items };
};
*/
