import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const Dashboard = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
