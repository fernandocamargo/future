import { node } from 'prop-types';

const Notifications = ({ children }) => children;

Notifications.propTypes = {
  children: node.isRequired,
};

Notifications.defaultProps = {};

export default Notifications;
