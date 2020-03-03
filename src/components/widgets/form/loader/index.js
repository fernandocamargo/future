import { func, node } from 'prop-types';
import React from 'react';

import withStylex from './style';

const Loader = ({ useStyle, children }) => {
  const style = useStyle();

  return (
    <div role="alert" aria-busy="true" {...style}>
      {children}
    </div>
  );
};

Loader.propTypes = {
  useStyle: func.isRequired,
  children: node,
};

Loader.defaultProps = {
  children: null,
};

export default withStylex(Loader);
