import { func, node } from 'prop-types';
import React from 'react';
import { Checkbox as Input, FormControlLabel } from '@material-ui/core';

import withStyle from './style';

const Checkbox = ({ useStyle, label, error, ...props }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <FormControlLabel label={label} control={<Input {...props} />} />
      {!!error && <p>{error}</p>}
    </div>
  );
};

Checkbox.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
};

Checkbox.defaultProps = {};

export default withStyle(Checkbox);
