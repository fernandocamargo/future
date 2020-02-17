import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Invalid = ({ useStyle, error }) => {
  const style = useStyle();

  return (
    <section {...style}>
      <p>{error}</p>
    </section>
  );
};

Invalid.propTypes = {
  useStyle: func.isRequired,
};

Invalid.defaultProps = {};

export default withStyle(Invalid);
