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
  components: { Form: Container },
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
          <Button type="submit">{submit}</Button>
          <Button type="button" onClick={goBack}>
            {cancel}
          </Button>
        </div>
        {busy && (
          <p role="alert" aria-busy="true">
            {loading}
          </p>
        )}
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
  }).isRequired,
  busy: bool,
  goBack: func.isRequired,
};

Form.defaultProps = {
  busy: false,
};

export default withStyle(Form);
