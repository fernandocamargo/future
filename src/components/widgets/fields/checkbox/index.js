import {
  bool,
  func,
  instanceOf,
  node,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React, { useCallback } from 'react';
import {
  Checkbox as Input,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

import withStyle from './style';

const Checkbox = ({
  onChange: change,
  fieldRef: inputRef,
  useStyle,
  label,
  value,
  disabled,
  error,
}) => {
  const onChange = useCallback(
    ({ target: { checked: next } }) => change(next),
    [change]
  );
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <FormControlLabel
          label={label}
          control={
            <Input
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
