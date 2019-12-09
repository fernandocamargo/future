import { node, oneOf, string } from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';

import withStyle from './style';

const Text = ({ className, error, ...props }) => (
  <div className={className}>
    <TextField
      variant="outlined"
      error={!!error}
      helperText={error}
      {...props}
    />
  </div>
);

Text.propTypes = {
  className: string.isRequired,
  label: node.isRequired,
  type: oneOf(['text', 'email', 'password']),
};

Text.defaultProps = {
  type: 'text',
};

export default withStyle(Text);
