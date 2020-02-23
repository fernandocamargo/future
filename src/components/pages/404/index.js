import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const NotFound = ({ useStyle }) => {
  const { title } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <h1>{title}</h1>
    </section>
  );
};

NotFound.propTypes = {
  useStyle: func.isRequired,
};

NotFound.defaultProps = {};

export default withStyle(NotFound);
