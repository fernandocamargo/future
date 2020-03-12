import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useProfile } from 'hooks/services/expertlead';

export const useDashboard = () => {
  const { me } = useProfile();
  const {
    resolve: load,
    data: profile,
    pending,
    fulfilled,
    rejected,
    error,
  } = usePromise({ promise: me });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(fulfilled && { on: { profile } }),
    ...(rejected && { off: { error } }),
    pending,
  };
};
