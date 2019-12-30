import { string } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';
import withStyle from './style';

const Form = ({
  elements: {
    fields: { ordered: fields },
  },
  components: { Form },
  className,
}) => {
  const { title, description, action } = useI18n(messages);

  return (
    <Form className={className}>
      <fieldset>
        <legend>{title}</legend>
        <p>{description}</p>
        <div>{fields}</div>
        <div>
          <button type="submit">{action}</button>
        </div>
      </fieldset>
    </Form>
  );
};

Form.propTypes = {
  className: string.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
