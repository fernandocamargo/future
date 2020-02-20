import { func } from 'prop-types';
import React from 'react';

import { Form } from 'components/widgets';

import { useLogin } from './hooks';
import withStyle from './style';

const Login = ({ useStyle }) => {
  const { form } = useLogin();
  const style = useStyle();

  return <section {...style}>{form && <Form {...form} />}</section>;
};

Login.propTypes = {
  useStyle: func.isRequired,
};

Login.defaultProps = {};

export default withStyle(Login);
