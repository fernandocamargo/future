import { func } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useRecoverPassword } from './hooks';
import withStyle from './style';

const RecoverPassword = ({ useStyle }) => {
  const form = useRecoverPassword();
  const style = useStyle();

  return (
    <section {...style}>
      <Form {...form} />
    </section>
  );
};

RecoverPassword.propTypes = {
  useStyle: func.isRequired,
};

RecoverPassword.defaultProps = {};

export default withStyle(RecoverPassword);
