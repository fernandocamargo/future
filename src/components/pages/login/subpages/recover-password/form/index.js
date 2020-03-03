import { arrayOf, elementType, func, node, shape } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Button } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form: Container, Fieldset, Submit, Loader },
  useStyle,
  goBack,
}) => {
  const { title, description, submit, cancel, loading } = useI18n(messages);
  const style = useStyle();

  return (
    <Container {...style}>
      <Fieldset>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Submit>{submit}</Submit>
          <Button onClick={goBack}>{cancel}</Button>
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
  elements: shape({
    fields: shape({
      ordered: arrayOf(node.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  components: shape({
    Form: elementType.isRequired,
    Fieldset: elementType.isRequired,
    Submit: elementType.isRequired,
    Loader: elementType.isRequired,
  }).isRequired,
  goBack: func.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
