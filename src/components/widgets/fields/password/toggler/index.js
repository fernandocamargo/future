import noop from 'lodash/noop';
import { bool, func } from 'prop-types';
import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Toggler = ({ visible, onClick }) => (
  <InputAdornment>
    <IconButton onClick={onClick}>
      {visible ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>
);

Toggler.propTypes = {
  onClick: func,
  visible: bool,
};

Toggler.defaultProps = {
  onClick: noop,
  visible: false,
};

export default Toggler;
