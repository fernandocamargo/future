import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useRoadtrip } from 'hooks';
import { useInvitation } from 'hooks/services/expertlead';

const onArrive = { profile: (_, { data: profile }) => profile };

export const useRegistration = () => {
  const { token } = useParams();
  const itinerary = useInvitation(token);
  const {
    context: { profile },
    value: condition,
    start,
    error,
  } = useRoadtrip({ itinerary, onArrive });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { token, profile }, invalid: { error, profile }, condition };
};
