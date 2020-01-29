import { node } from 'prop-types';
import React, { Fragment } from 'react';

/*
import Notification from '@material-ui/core/SnackbarContent';

    <div
      style={{
        bottom: '1rem',
        position: 'fixed',
        right: '1rem',
        width: '50vw',
      }}
    >
      <Notification message="Wait... what?" />
      <Notification message="Wait... what?" />
      <Notification message="Wait... what?" />
      <Notification message="Wait... what?" />
    </div>
*/

const Notifications = ({ children }) => <Fragment>{children}</Fragment>;

Notifications.propTypes = {
  children: node,
};

Notifications.defaultProps = {};

export default Notifications;
