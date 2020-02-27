import { useEffect } from 'react';

import { useRoadtrip } from 'hooks';
import { useFAQ } from 'hooks/services/fs';

const onArrive = { services: (_, { data: services }) => services };

export default () => {
  const itinerary = useFAQ();
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
