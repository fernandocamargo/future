import { string } from 'prop-types';
import React from 'react';

import { useI18n, useForm } from 'hooks';
import { Form } from 'components/widgets';

import messages from './messages';
import schema from './schema';
import withStyle from './style';

import FormRender from './form';

const Registration = ({ className }) => {
  const {
    form: { title },
    description,
    registration,
  } = useI18n(messages);
  const { props: form } = useForm(schema);

  return (
    <section className={className}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <Form {...form} title={registration} render={FormRender} />
    </section>
  );
};

Registration.propTypes = {
  className: string.isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
