import { string, node } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import withStyle from './style';

const MenuItem = ({ className, label, url }) => (
  <li className={className}>
    <Link to={url} title={label}>
      {label}
    </Link>
  </li>
);

MenuItem.propTypes = {
  className: string.isRequired,
  label: node.isRequired,
  url: string,
};

MenuItem.defaultProps = {};

export default withStyle(MenuItem);
