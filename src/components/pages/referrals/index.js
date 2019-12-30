import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const Referrals = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

Referrals.propTypes = {};

Referrals.defaultProps = {};

export default Referrals;
