import { func, node } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import Menu from '../menu';
import messages from './messages';
import withStyle from './style';

const Invalid = ({ useStyle, error }) => {
  const { title } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{error}</p>
        <Menu />
      </article>
    </section>
  );
};

Invalid.propTypes = {
  useStyle: func.isRequired,
  error: node.isRequired,
};

Invalid.defaultProps = {};

export default withStyle(Invalid);
