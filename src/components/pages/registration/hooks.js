import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePromise } from 'hooks';
import { useInvitation } from 'hooks/services/expertlead';

export const useRegistration = () => {
  const { token } = useParams();
  const invite = useInvitation(token);
  const { data: profile, status, start, error } = usePromise({
    promise: invite,
  });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { token, profile }, invalid: { error, profile }, status };
};
