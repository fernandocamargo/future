import { node, string } from 'prop-types';
import React from 'react';
import { Checkbox as Input, FormControlLabel } from '@material-ui/core';

import withStyle from './style';

const Checkbox = ({ className, label, error, ...props }) => (
  <div className={className}>
    <FormControlLabel label={label} control={<Input {...props} />} />
    {!!error && <p>{error}</p>}
  </div>
);

Text.propTypes = {
  className: string.isRequired,
  label: node.isRequired,
};

Text.defaultProps = {};

export default withStyle(Checkbox);
