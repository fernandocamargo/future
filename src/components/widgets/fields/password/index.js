import { func } from 'prop-types';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

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
  useStyle: func.isRequired,
};

Password.defaultProps = {};

export default withStyle(Password);
