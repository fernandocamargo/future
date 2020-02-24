import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Link as Anchor } from 'components/widgets';

import messages from './messages';

const Link = props => {
  const { title } = useI18n(messages);

  return <Anchor {...props}>{title}</Anchor>;
};

Link.propTypes = {
  to: func.isRequired,
};

Link.defaultProps = {};

export default Link;
