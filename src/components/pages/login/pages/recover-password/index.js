import React from 'react';

import { Form } from 'components/widgets';

import { useRecoverPassword } from './hooks';

const RecoverPassword = () => {
  const form = useRecoverPassword();

  return <Form {...form} />;
};

RecoverPassword.propTypes = {};

RecoverPassword.defaultProps = {};

export default RecoverPassword;
