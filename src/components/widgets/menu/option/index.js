import { node, string } from 'prop-types';
import React, { forwardRef } from 'react';

import withStyle from './style';

const Option = forwardRef(({ className, id, children }, ref) => (
  <li className={className} itemProp={id} ref={ref}>
    {children}
  </li>
));

Option.propTypes = {
  className: string.isRequired,
  id: string.isRequired,
  children: node.isRequired,
};

Option.defaultProps = {};

export default withStyle(Option);
