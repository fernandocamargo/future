import { func } from 'prop-types';
import React, { useCallback } from 'react';
import { IconButton as Container } from '@material-ui/core';

import withStyle from './style';

const Button = ({ useStyle, ...props }) => {
  const onMouseDown = useCallback(() => console.log('onMouseDown();'), []);
  const style = useStyle();

  return <Container onMouseDown={onMouseDown} {...props} {...style} />;
};

Button.propTypes = {
  useStyle: func.isRequired,
};

Button.defaultProps = {};

export default withStyle(Button);
