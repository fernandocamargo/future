import { func } from 'prop-types';
import React from 'react';

import useServices from './hooks';
import withStyle from './style';

const Services = ({ useStyle }) => {
  const { valid } = useServices();
  const style = useStyle();

  return (
    <div {...style}>
      <h1>Services</h1>
      <pre>{JSON.stringify(valid, null, 2)}</pre>
    </div>
  );
};

Services.propTypes = {
  useStyle: func.isRequired,
};

Services.defaultProps = {};

export default withStyle(Services);
