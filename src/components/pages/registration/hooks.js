import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePromise } from 'hooks';
import { useInvitation } from 'hooks/services/expertlead';

export const useRegistration = () => {
  const { token } = useParams();
  const invite = useInvitation(token);
  const { resolve: load, data: profile, status, error } = usePromise({
    promise: invite,
  });

  useEffect(() => {
    load();
  }, [load]);

  return { valid: { token, profile }, invalid: { error, profile }, status };
};
