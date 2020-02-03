import { bool, func } from 'prop-types';
import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import withStyle from './style';

const Toggler = ({ useStyle, visible, onClick }) => {
  const style = useStyle();

  return (
    <InputAdornment {...style}>
      <IconButton onClick={onClick}>
        {visible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};

Toggler.propTypes = {
  useStyle: func.isRequired,
  onClick: func.isRequired,
  visible: bool,
};

Toggler.defaultProps = {
  visible: false,
};

export default withStyle(Toggler);
