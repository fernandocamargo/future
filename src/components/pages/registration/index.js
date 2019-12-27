import { string } from 'prop-types';
import React from 'react';

import { useI18n, useForm } from 'hooks';
import { Form } from 'components/widgets';

import schema from './schema';
import messages from './messages';
import FormRender from './form';
import withStyle from './style';

const Registration = ({ className }) => {
  const { title, description } = useI18n(messages);
  const { props } = useForm(schema);

  return (
    <section className={className}>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <Form render={FormRender} {...props} />
    </section>
  );
};

Registration.propTypes = {
  className: string.isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
