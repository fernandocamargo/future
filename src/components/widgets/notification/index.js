import { func } from 'prop-types';
import React from 'react';
import { SnackbarContent } from '@material-ui/core';

import withStyle from './style';

const Notification = ({ useStyle, ...props }) => {
  const style = useStyle();

  return <SnackbarContent {...style} {...props} />;
};

Notification.propTypes = {
  useStyle: func.isRequired,
};

Notification.defaultProps = {};

export default withStyle(Notification);
