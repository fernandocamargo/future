import { func, shape, string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import { useRegistration } from './hooks';
import messages from './messages';
import withStyle from './style';

const Registration = ({ useStyle, profile }) => {
  const registration = useRegistration(profile);
  const { title, description } = useI18n(messages);
  const style = useStyle();

  return (
    <section {...style}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <Form {...registration} />
    </section>
  );
};

Registration.propTypes = {
  useStyle: func.isRequired,
  profile: shape({
    email: string.isRequired,
    name: string.isRequired,
  }).isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
