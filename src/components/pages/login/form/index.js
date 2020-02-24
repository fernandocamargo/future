import { func } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Button } from 'components/widgets';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form },
  useStyle,
  busy,
}) => {
  const { title, description, action, loading } = useI18n(messages);
  const style = useStyle();

  return (
    <Form {...style}>
      <fieldset disabled={busy}>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Button type="submit">{action}</Button>
        </div>
        {busy && (
          <p role="alert" aria-busy="true">
            {loading}
          </p>
        )}
      </fieldset>
    </Form>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
