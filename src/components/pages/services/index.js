import { func } from 'prop-types';
import React from 'react';

import useServices from './hooks';
import withStyle from './style';

const Services = ({ useStyle }) => {
  const { valid, status } = useServices();
  const style = useStyle();

  return (
    <div {...style}>
      <h1>Services</h1>
      {!!valid && <pre>{JSON.stringify(valid.services, null, 2)}</pre>}
      <h2>Status: {status}</h2>
    </div>
  );
};

Services.propTypes = {
  useStyle: func.isRequired,
};

Services.defaultProps = {};

export default withStyle(Services);
