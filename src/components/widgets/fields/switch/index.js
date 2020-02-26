import {
  bool,
  func,
  instanceOf,
  node,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React from 'react';
import {
  Switch as Input,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

import withStyle from './style';

const Switch = ({
  fieldRef: inputRef,
  useStyle,
  name,
  label,
  value,
  onChange,
  disabled,
  error,
}) => {
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <FormControlLabel
          control={
            <Input
              name={name}
              onChange={onChange}
              checked={value}
              inputRef={inputRef}
              disabled={disabled}
              value
            />
          }
          label={label}
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Switch.propTypes = {
  useStyle: func.isRequired,
  name: string.isRequired,
  label: node.isRequired,
  value: bool,
  onChange: func.isRequired,
  error: node,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
  disabled: bool,
};

Switch.defaultProps = {
  value: false,
  disabled: false,
  error: null,
};

export default withStyle(Switch);
