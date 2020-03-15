import { useCallback, useEffect } from 'react';

import { usePromise } from 'hooks';
import { useProfile } from 'hooks/services/expertlead';

import { format } from './helpers';

export const useDashboard = () => {
  const profile = useProfile();
  const promise = useCallback(
    () => Promise.all([profile.get(), profile.getFocusRoleList()]).then(format),
    [profile]
  );
  const { resolve: load, data, fulfilled, rejected, error } = usePromise({
    promise,
  });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(fulfilled && { on: { profile: data } }),
    ...(rejected && { off: { error } }),
  };
};
