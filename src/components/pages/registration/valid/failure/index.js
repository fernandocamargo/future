import { func, node } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Failure = ({ reason: description, useStyle }) => {
  const { title } = useI18n(messages);
  const style = useStyle();

  return (
    <article {...style}>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
};

Failure.propTypes = {
  useStyle: func.isRequired,
  reason: node.isRequired,
};

Failure.defaultProps = {};

export default withStyle(Failure);
