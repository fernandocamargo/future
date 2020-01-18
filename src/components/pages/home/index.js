import React, { useMemo } from 'react';

import { useAuthentication, useRoutes } from 'hooks';
import { Redirect } from 'components/routes';

const Home = () => {
  const { logged } = useAuthentication();
  const { dashboard, registration } = useRoutes();
  const to = useMemo(() => (logged ? dashboard : registration), [
    logged,
    dashboard,
    registration,
  ]);

  return <Redirect to={to} />;
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
