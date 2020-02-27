import { useEffect } from 'react';

import { useRoadtrip } from 'hooks';
import { useServices } from 'hooks/services/fs';

const onArrive = { services: (_, { data: services }) => services };

export default () => {
  const itinerary = useServices();
  const {
    context: { services },
    value: condition,
    start,
    error,
  } = useRoadtrip({ itinerary, onArrive });

  useEffect(() => {
    start();
  }, [start]);

  return { valid: { services }, invalid: { error }, condition };
};
