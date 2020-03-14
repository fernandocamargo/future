import { useCallback, useEffect } from 'react';

import { usePromise } from 'hooks';
import { useProfile } from 'hooks/services/expertlead';

import { format } from './helpers';

export const useDashboard = () => {
  const { getFocusRoleList, getProfile } = useProfile();
  const fail = useCallback(() => {
    throw new Error({ message: 'nope' });
  }, []);
  const promise = useCallback(
    () =>
      Promise.all([
        getFocusRoleList().catch(fail),
        getProfile().catch(fail),
      ]).then(format),
    [getFocusRoleList, getProfile, fail]
  );
  const {
    resolve: load,
    data: profile,
    fulfilled,
    rejected,
    error,
  } = usePromise({ promise });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(fulfilled && { on: { profile } }),
    ...(rejected && { off: { error } }),
  };
};
