import { string } from 'prop-types';
import React from 'react';

import Field from './field';
import withStyle from './style';

const renderField = field => <Field key={field.name} {...field} />;

const Form = ({ className, onSubmit, title, fields }) => (
  <form className={className} autoComplete="off" noValidate onSubmit={onSubmit}>
    <fieldset>
      <legend>{title}</legend>
      {fields.map(renderField)}
    </fieldset>
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  className: string.isRequired,
};

Form.defaultProps = {};

export default withStyle(Form);
