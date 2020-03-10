import { func, node, shape, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import Menu from '../menu';
import messages from './messages';
import withStyle from './style';

const Invalid = ({ error: { message: error, profile }, useStyle }) => {
  const { title } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{error}</p>
        <Menu profile={profile} />
      </article>
    </section>
  );
};

Invalid.propTypes = {
  useStyle: func.isRequired,
  error: shape({
    profile: shape({ email: string }),
    message: node.isRequired,
  }).isRequired,
};

Invalid.defaultProps = {};

export default withStyle(Invalid);
