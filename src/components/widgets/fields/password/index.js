import { func } from 'prop-types';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { reverse } from 'helpers/boolean';

import Toggler from './toggler';
import withStyle from './style';

const Password = ({ useStyle, label, error, ...props }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const type = useMemo(() => (visible ? 'text' : 'password'), [visible]);
  const toggle = useCallback(() => {
    setVisible(reverse);
    ref.current.focus();
  }, []);
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl variant="outlined" error={!!error}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          inputRef={ref}
          type={type}
          endAdornment={<Toggler visible={visible} onClick={toggle} />}
          error={!!error}
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
