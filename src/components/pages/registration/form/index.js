import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Form = ({
  components: { Form },
  elements: { unordered: fields },
  className,
}) => (
  <Form className={className}>
    <h1>Registration</h1>
    <p>We are expecting a strong password from you!</p>
    {fields}
    <div>
      <button type="submit">Create account</button>
    </div>
  </Form>
);

Form.propTypes = {
  className: string.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
