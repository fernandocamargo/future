import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Loader = ({ useStyle }) => {
  const { content } = useI18n(messages);
  const style = useStyle();

  return <p {...style}>{content}</p>;
};

Loader.propTypes = {
  useStyle: func.isRequired,
};

Loader.defaultProps = {};

export default withStyle(Loader);
