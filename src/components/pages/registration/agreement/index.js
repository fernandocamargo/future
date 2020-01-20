import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Agreement = ({ useStyle }) => {
  const style = useStyle();

  return (
    <span {...style}>
      <span>You agree to expertlead </span>
      <a href="/user-agreement" title="User Agreement">
        User Agreement
      </a>
      <span> and </span>
      <a href="/privacy-policy" title="Privacy Policy">
        Privacy Policy
      </a>
    </span>
  );
};

Agreement.propTypes = {
  useStyle: func.isRequired,
};

Agreement.defaultProps = {};

export default withStyle(Agreement);
