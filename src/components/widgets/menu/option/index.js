import { func, node } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Option = ({ useStyle, children, ...props }) => {
  const style = useStyle();

  return (
    <li {...style} {...props}>
      {children}
    </li>
  );
};

Option.propTypes = {
  useStyle: func.isRequired,
  children: node.isRequired,
};

Option.defaultProps = {};

export default withStyle(Option);
