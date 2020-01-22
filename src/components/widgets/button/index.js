import { func } from 'prop-types';
import React from 'react';
import { Button as Container } from '@material-ui/core';

import withStyle from './style';

const Button = ({ useStyle, ...props }) => {
  const style = useStyle();

  return <Container {...props} {...style} />;
};

Button.propTypes = {
  useStyle: func.isRequired,
};

Button.defaultProps = {};

export default withStyle(Button);
