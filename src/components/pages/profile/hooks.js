import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useProfile as useCurrentProfile } from 'hooks/services/expertlead';

export const useProfile = () => {
  const profile = useCurrentProfile();
  const { resolve: load, data, fulfilled, rejected, error } = usePromise({
    promise: profile.get,
  });

  useEffect(() => {
    load();
  }, [load]);

  return {
    ...(fulfilled && { on: { profile: data } }),
    ...(rejected && { off: { error } }),
  };
};
