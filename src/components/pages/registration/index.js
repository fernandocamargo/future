import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import { useRegistration } from './hooks';
import render from './form';
import messages from './messages';
import withStyle from './style';

const Registration = ({ useStyle }) => {
  const registration = useRegistration({ render });
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
};

Registration.defaultProps = {};

export default withStyle(Registration);
