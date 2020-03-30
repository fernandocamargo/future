import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from 'hooks';

export const useMenu = () => {
  const { pathname: location } = useLocation();
  const routes = useRoutes();
  const editing = useMemo(() => location.endsWith(routes.edit), [
    location,
    routes,
  ]);
  const edit = useMemo(() => `${location}/${routes.edit}`, [location, routes]);

  return { edit, editing };
};
