import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Checkbox = ({ className, label, ...props }) => (
  <div className={className}>
    <input type="checkbox" {...props} />
    <label>{label}</label>
  </div>
);

Text.propTypes = {
  className: string.isRequired,
};

Text.defaultProps = {};

export default withStyle(Checkbox);
