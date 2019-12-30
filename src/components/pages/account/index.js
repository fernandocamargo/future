import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const Account = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

Account.propTypes = {};

Account.defaultProps = {};

export default Account;
