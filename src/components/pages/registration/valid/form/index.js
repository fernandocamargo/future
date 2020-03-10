import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import * as form from 'prop-types/definitions/form';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form: Container, Fieldset, Submit, Loader },
  useStyle,
}) => {
  const { title, description, action, loading } = useI18n(messages);
  const style = useStyle();

  return (
    <Container {...style}>
      <Fieldset>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Submit>{action}</Submit>
        </div>
        <Loader>
          <p>{loading}</p>
        </Loader>
      </Fieldset>
    </Container>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
  ...form,
};

Form.defaultProps = {};

export default withStyle(Form);
