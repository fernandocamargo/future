import { string } from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

import { invert } from 'helpers/boolean';

import Toggler from './toggler';
import withStyle from './style';

const Password = ({ className, label, error, ...props }) => {
  const [visible, setVisible] = useState(false);
  const toggle = useCallback(() => setVisible(invert), []);
  const type = useMemo(() => (visible ? 'text' : 'password'), [visible]);

  return (
    <div className={className}>
      <FormControl variant="outlined" error={!!error}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={type}
          endAdornment={<Toggler visible={visible} onClick={toggle} />}
          error={!!error}
          labelWidth={100}
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
