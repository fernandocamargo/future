import { node, string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Option = ({ className, id, children }) => (
  <li className={className} itemProp={id}>
    {children}
  </li>
);

Option.propTypes = {
  className: string.isRequired,
  id: string.isRequired,
  children: node.isRequired,
};

Option.defaultProps = {};

export default withStyle(Option);
