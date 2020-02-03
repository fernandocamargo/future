import {
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
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })]),
};

Text.defaultProps = {
  type: 'text',
  value: '',
};

export default withStyle(Text);
