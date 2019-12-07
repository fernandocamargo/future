import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Phone = ({ className }) => (
  <span className={className}>
    <em>Call us: </em>
    <strong>+49 30 209 663 144</strong>
  </span>
);

Phone.propTypes = {
  className: string.isRequired,
};

Phone.defaultProps = {};

export default withStyle(Phone);
