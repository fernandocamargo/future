import React from 'react';

import { Redirect } from 'components/routes';

import { useHome } from './hooks';

const Home = () => {
  const to = useHome();

  return <Redirect to={to} />;
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
