import { func, node, oneOf } from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';

import withStyle from './style';

const Text = ({ fieldRef: inputRef, useStyle, error, ...props }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <TextField
        variant="outlined"
        helperText={error}
        error={!!error}
        inputRef={inputRef}
        {...props}
      />
    </div>
  );
};

Text.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
  type: oneOf(['text', 'email']),
};

Text.defaultProps = {
  type: 'text',
};

export default withStyle(Text);
