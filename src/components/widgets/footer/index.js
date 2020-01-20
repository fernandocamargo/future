import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Footer = ({ useStyle }) => {
  const style = useStyle();

  return (
    <footer {...style}>
      <p>All rights reserved.</p>
    </footer>
  );
};

Footer.propTypes = {
  useStyle: func.isRequired,
};

Footer.defaultProps = {};

export default withStyle(Footer);
