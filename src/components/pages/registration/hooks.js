import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePromise } from 'hooks';
import { useInvitation } from 'hooks/services/expertlead';

const then = { profile: (_, { data: profile }) => profile };

export const useRegistration = () => {
  const { token } = useParams();
  const promise = useInvitation(token);
  const {
    context: { profile },
    value: condition,
    start,
    error,
  } = usePromise({ promise, then });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { token, profile }, invalid: { error, profile }, condition };
};
