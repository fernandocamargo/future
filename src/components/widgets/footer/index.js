import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Footer = ({ className }) => (
  <footer className={className}>
    <p>All rights reserved.</p>
  </footer>
);

Footer.propTypes = {
  className: string.isRequired,
};

Footer.defaultProps = {};

export default withStyle(Footer);
