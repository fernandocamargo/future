import { func, node } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Invalid = ({ useStyle, error }) => {
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{error}</h1>
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
