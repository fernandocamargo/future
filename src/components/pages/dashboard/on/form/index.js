import React from 'react';

import * as form from 'prop-types/definitions/form';
import { useI18n } from 'hooks';

import messages from './messages';

const Form = ({
  elements: {
    fields: {
      unordered: { 'remote-only': remoteOnly, availability, location, role },
    },
  },
  components: { Form: Container, Fieldset, Submit, Loader },
}) => {
  const i18n = useI18n(messages);

  return (
    <Container>
      <Fieldset>
        <legend>{i18n.title}</legend>
        <dl>
          <dt>{i18n.availability}</dt>
          <dd>{availability}</dd>
        </dl>
        <dl>
          <dt>{i18n['remote-only']}</dt>
          <dd>{remoteOnly}</dd>
        </dl>
        <dl>
          <dt>{i18n.location}</dt>
          <dd>{location}</dd>
        </dl>
        <dl>
          <dt>{i18n.role}</dt>
          <dd>{role}</dd>
        </dl>
        <div>
          <Submit>{i18n.save}</Submit>
        </div>
        <Loader>
          <p>{i18n.loading}</p>
        </Loader>
      </Fieldset>
    </Container>
  );
};

Form.propTypes = {
  ...form,
};

Form.defaultProps = {};

export default Form;
