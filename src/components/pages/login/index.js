import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import { useLogin } from './hooks';
import messages from './messages';
import withStyle from './style';

const Login = ({ useStyle }) => {
  const { form } = useLogin();
  const { title, description } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      {form && <Form {...form} />}
    </section>
  );
};

Login.propTypes = {
  useStyle: func.isRequired,
};

Login.defaultProps = {};

export default withStyle(Login);
