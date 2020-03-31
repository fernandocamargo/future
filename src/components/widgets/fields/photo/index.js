import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Photo = ({ useStyle, label, value }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <h3>{label}</h3>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

Photo.propTypes = {
  useStyle: func.isRequired,
};

Photo.defaultProps = {};

export default withStyle(Photo);
