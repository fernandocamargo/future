import { string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Loader = ({ className }) => {
  const { content } = useI18n(messages);

  return <p className={className}>{content}</p>;
};

Loader.propTypes = {
  className: string.isRequired,
};

Loader.defaultProps = {};

export default withStyle(Loader);
