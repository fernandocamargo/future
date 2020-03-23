import { useEffect } from 'react';

import { usePromise } from 'hooks';
import { useProfile } from 'hooks/services/expertlead';

export const useAboutMe = () => {
  const profile = useProfile();
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
