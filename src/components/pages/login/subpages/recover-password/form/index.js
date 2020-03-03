import { arrayOf, bool, elementType, func, node, shape } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Button } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form: Container, Submit, Loader },
  useStyle,
  goBack,
  busy,
}) => {
  const { title, description, submit, cancel, loading } = useI18n(messages);
  const style = useStyle();

  return (
    <Container {...style}>
      <fieldset disabled={busy}>
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
      </fieldset>
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
    Submit: elementType.isRequired,
    Loader: elementType.isRequired,
  }).isRequired,
  busy: bool,
  goBack: func.isRequired,
};

Form.defaultProps = {
  busy: false,
};

export default withStyle(Form);
