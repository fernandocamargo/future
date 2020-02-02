import { func } from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { reverse } from 'helpers/boolean';

import { measure } from './helpers';
import Toggler from './toggler';
import withStyle from './style';

const Password = ({ fieldRef: inputRef, useStyle, label, error, ...props }) => {
  const [visible, setVisible] = useState(false);
  const type = useMemo(() => (visible ? 'text' : 'password'), [visible]);
  const toggle = useCallback(() => {
    setVisible(reverse);
    inputRef.current.focus();
  }, [inputRef]);
  const labelWidth = useMemo(() => measure(label), [label]);
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl variant="outlined" error={!!error}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          inputRef={inputRef}
          type={type}
          endAdornment={<Toggler visible={visible} onClick={toggle} />}
          error={!!error}
          labelWidth={labelWidth}
          {...props}
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Password.propTypes = {
  useStyle: func.isRequired,
};

Password.defaultProps = {};

export default withStyle(Password);
