import { bool, func, instanceOf, oneOfType, node, shape } from 'prop-types';
import React, { useMemo } from 'react';
import { CircularProgress as Loader, TextField } from '@material-ui/core';

import withStyle from './style';

const Input = ({
  InputProps: inputProps,
  fieldRef: inputRef,
  useStyle,
  loading,
  ...props
}) => {
  const endAdornment = useMemo(() => loading && <Loader />, [loading]);
  const InputProps = useMemo(() => ({ ...inputProps, endAdornment }), [
    inputProps,
    endAdornment,
  ]);
  const style = useStyle();

  return (
    <TextField
      {...props}
      {...style}
      InputProps={InputProps}
      inputRef={inputRef}
      variant="outlined"
    />
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
