import { node } from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';

const Notifications = props => <SnackbarProvider hideIconVariant {...props} />;

Notifications.propTypes = {
  children: node,
};

Notifications.defaultProps = {};

export default Notifications;
