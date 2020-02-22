import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useRoadtrip } from 'hooks';
import { useInvitation } from 'hooks/services/expertlead';

export const useCondition = () => {
  const { token } = useParams();
  const invite = useInvitation(token);
  const {
    context: { profile },
    value: condition,
    start,
    error,
  } = useRoadtrip({
    itinerary: () => invite(),
    destination: { profile: (_, { data: profile }) => profile },
    crash: () => console.log('crash();'),
  });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { token, profile }, invalid: { error }, condition };
};
