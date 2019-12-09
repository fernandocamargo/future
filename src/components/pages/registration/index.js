import { string } from 'prop-types';
import React from 'react';

import { useForm } from 'hooks';
import { Form } from 'components/widgets';

import schema from './schema';
import withStyle from './style';

import FormRender from './form';

const Registration = ({ className }) => {
  const { props: form } = useForm(schema);

  return (
    <section className={className}>
      <article>
        <h2>Welcome!</h2>
        <p>
          You have chosen an excellent moment to join. Now let us make your
          journey comfortable...
        </p>
      </article>
      <Form {...form} title="Registration" render={FormRender} />
    </section>
  );
};

Registration.propTypes = {
  className: string.isRequired,
};

Registration.defaultProps = {};

export default withStyle(Registration);
