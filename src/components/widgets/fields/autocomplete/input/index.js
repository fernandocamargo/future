import { bool, func, instanceOf, oneOfType, node, shape } from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';

import withStyle from './style';

const Input = ({ fieldRef: inputRef, useStyle, loading, ...props }) => {
  const style = useStyle();

  return (
    <TextField {...props} {...style} inputRef={inputRef} variant="outlined" />
  );
};

Input.propTypes = {
  useStyle: func.isRequired,
  InputProps: shape({}).isRequired,
  label: node,
  loading: bool,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
};

Input.defaultProps = {
  label: null,
  loading: false,
};

export default withStyle(Input);
