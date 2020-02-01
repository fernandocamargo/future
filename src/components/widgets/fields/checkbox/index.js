import { func, node } from 'prop-types';
import React from 'react';
import { Checkbox as Input, FormControlLabel } from '@material-ui/core';
import { FormControl, FormHelperText } from '@material-ui/core';

import withStyle from './style';

const Checkbox = ({ useStyle, label, value, error, ...props }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <FormControlLabel
          label={label}
          control={<Input {...props} checked={value} value={true} />}
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Checkbox.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
};

Checkbox.defaultProps = {};

export default withStyle(Checkbox);
