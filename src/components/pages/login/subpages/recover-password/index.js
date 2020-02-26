import { shape, string } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useRecoverPassword } from './hooks';

const RecoverPassword = ({ profile }) => {
  const form = useRecoverPassword({ profile });

  return <Form {...form} />;
};

RecoverPassword.propTypes = {
  profile: shape({
    email: string.isRequired,
  }),
};

RecoverPassword.defaultProps = {
  profile: {},
};

export default RecoverPassword;
