import React from 'react';

import { Loader } from 'components/widgets';

import { useDashboard } from './hooks';
import On from './on';
import Off from './off';

const Dashboard = () => {
  const { on, off } = useDashboard();

  switch (true) {
    case !!on:
      return <On {...on} />;
    case !!off:
      return <Off {...off} />;
    default:
      return <Loader />;
  }
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
