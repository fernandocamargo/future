import { func, shape, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import { useRegistration } from './hooks';
import Success from './success';
import messages from './messages';
import withStyle from './style';

const Valid = ({ useStyle, ...props }) => {
  const { form, success } = useRegistration(props);
  const { title, description } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      {success ? <Success {...success} /> : <Form {...form} />}
    </section>
  );
};

Valid.propTypes = {
  useStyle: func.isRequired,
  token: string.isRequired,
  profile: shape({
    firstName: string.isRequired,
    lastName: string.isRequired,
    email: string.isRequired,
  }).isRequired,
};

Valid.defaultProps = {};

export default withStyle(Valid);
