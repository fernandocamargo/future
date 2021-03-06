import { node, shape, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import Menu from '../../menu';
import messages from './messages';

const Rejected = ({ reason: description, profile }) => {
  const { title } = useI18n(messages);

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <Menu profile={profile} />
    </article>
  );
};

Rejected.propTypes = {
  reason: node.isRequired,
  profile: shape({
    email: string.isRequired,
  }).isRequired,
};

Rejected.defaultProps = {};

export default Rejected;
