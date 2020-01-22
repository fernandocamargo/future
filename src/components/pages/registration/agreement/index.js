import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Link } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Agreement = ({ useStyle }) => {
  const { you, agreement, and, policy } = useI18n(messages);
  const style = useStyle();

  return (
    <span {...style}>
      <span>{you} </span>
      <Link to="/user-agreement" title={agreement}>
        {agreement}
      </Link>
      <span> {and} </span>
      <Link to="/privacy-policy" title={policy}>
        {policy}
      </Link>
    </span>
  );
};

Agreement.propTypes = {
  useStyle: func.isRequired,
};

Agreement.defaultProps = {};

export default withStyle(Agreement);
