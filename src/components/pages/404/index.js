import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const NotFound = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
