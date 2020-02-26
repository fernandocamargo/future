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
  Checkbox as Input,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

import withStyle from './style';

const Checkbox = ({
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
          label={label}
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
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  value: false,
  error: null,
  disabled: false,
};

export default withStyle(Checkbox);
