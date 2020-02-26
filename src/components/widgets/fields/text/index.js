import {
  bool,
  func,
  instanceOf,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';

import withStyle from './style';

const Text = ({
  fieldRef: inputRef,
  useStyle,
  type,
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
      <TextField
        variant="outlined"
        type={type}
        name={name}
        label={label}
        helperText={error}
        value={value}
        onChange={onChange}
        error={!!error}
        inputRef={inputRef}
        disabled={disabled}
      />
    </div>
  );
};

Text.propTypes = {
  useStyle: func.isRequired,
  type: oneOf(['email', 'search', 'tel', 'text', 'url']),
  name: string.isRequired,
  label: node.isRequired,
  value: oneOfType([string, number]),
  onChange: func.isRequired,
  error: node,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
  disabled: bool,
};

Text.defaultProps = {
  type: 'text',
  value: '',
  disabled: false,
  error: null,
};

export default withStyle(Text);
