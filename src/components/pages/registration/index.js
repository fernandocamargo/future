import { string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Form } from 'components/widgets';

import { useRegistration } from './hooks';
import render from './form';
import messages from './messages';
import withStyle from './style';

const Registration = ({ className }) => {
  const { title, description } = useI18n(messages);
  const registration = useRegistration({ render });

  return (
    <section className={className}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <Form {...registration} />
    </section>
  );
};

Registration.propTypes = {
  className: string.isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
