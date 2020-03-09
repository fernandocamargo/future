import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import { useDashboard } from './hooks';
import messages from './messages';
import withStyle from './style';

const Dashboard = ({ useStyle }) => {
  const form = useDashboard();
  const { title } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <h1>{title}</h1>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </section>
  );
};

Dashboard.propTypes = {
  useStyle: func.isRequired,
};

Dashboard.defaultProps = {};

export default withStyle(Dashboard);
