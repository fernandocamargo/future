import { func } from 'prop-types';
import React from 'react';

import { Link } from 'components/widgets';

import withStyle from './style';

const Agreement = ({ useStyle }) => {
  const style = useStyle();

  return (
    <span {...style}>
      <span>You agree to expertlead </span>
      <Link to="/user-agreement" title="User Agreement">
        User Agreement
      </Link>
      <span> and </span>
      <Link to="/privacy-policy" title="Privacy Policy">
        Privacy Policy
      </Link>
    </span>
  );
};

Agreement.propTypes = {
  useStyle: func.isRequired,
};

Agreement.defaultProps = {};

export default withStyle(Agreement);
