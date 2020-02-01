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
  original,
  useStyle,
}) => {
  const { title, description, action } = useI18n(messages);
  const style = useStyle();

  return (
    <Form {...style}>
      <fieldset>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <Button type="submit" disabled={original}>
            {action}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};

Form.propTypes = {
  useStyle: func.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
