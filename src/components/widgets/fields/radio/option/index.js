import {
  any,
  bool,
  func,
  instanceOf,
  node,
  oneOfType,
  shape,
} from 'prop-types';
import React, { useCallback } from 'react';
import { Radio as Input, FormControlLabel } from '@material-ui/core';

import withStyle from './style';

const Option = ({
  onChange: change,
  fieldRef: inputRef,
  useStyle,
  label,
  value,
  checked,
  disabled,
}) => {
  const onChange = useCallback(() => change(value), [change, value]);
  const style = useStyle();

  return (
    <div {...style}>
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
    </div>
  );
};

Option.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
  value: oneOfType([any]).isRequired,
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
