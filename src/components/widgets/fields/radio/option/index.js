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
  Radio as Input,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

import withStyle from './style';

const Option = ({
  onChange: change,
  fieldRef: inputRef,
  useStyle,
  label,
  value,
  checked,
  disabled,
  error,
}) => {
  const onChange = useCallback(() => change(value), [change, value]);
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <FormControlLabel
          label={label}
          control={
            <Input
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              inputRef={inputRef}
              value
            />
          }
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Option.propTypes = {
  useStyle: func.isRequired,
  name: string.isRequired,
  label: node.isRequired,
  value: string.isRequired,
  checked: bool,
  onChange: func.isRequired,
  disabled: bool,
  error: node,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })]),
};

Option.defaultProps = {
  checked: false,
  disabled: false,
  error: null,
  fieldRef: null,
};

export default withStyle(Option);
