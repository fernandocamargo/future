import moment from 'moment';
import { useMemo } from 'react';

export const useFulfilled = ({ redirect: { when } }) => {
  const from = useMemo(() => when.diff(moment(), 'seconds'), [when]);

  return { countdown: { from } };
};
