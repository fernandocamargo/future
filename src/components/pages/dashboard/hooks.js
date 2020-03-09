import { useMemo } from 'react';

export const useDashboard = () => {
  const fields = useMemo(() => [], []);

  return { fields };
};
