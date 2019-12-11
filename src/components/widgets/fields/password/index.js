import { string } from 'prop-types';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import { invert } from 'helpers/boolean';

import Toggler from './toggler';
import withStyle from './style';

const Password = ({ className, label, error, ...props }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const type = useMemo(() => (visible ? 'text' : 'password'), [visible]);
  const toggle = useCallback(() => {
    setVisible(invert);
    ref.current.focus();
  }, []);

  return (
    <div className={className}>
      <FormControl variant="outlined" error={!!error}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={type}
          endAdornment={<Toggler visible={visible} onClick={toggle} />}
          error={!!error}
          labelWidth={100}
          inputRef={ref}
        />
      </FormControl>
    </div>
  );
};

Password.propTypes = {
  className: string.isRequired,
};

Password.defaultProps = {};

export default withStyle(Password);
