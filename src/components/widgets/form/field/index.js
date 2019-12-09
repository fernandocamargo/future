import React from 'react';

const Field = ({ field: Field, settings, ...props }) => (
  <Field {...settings} {...props} />
);

Field.propTypes = {};

Field.defaultProps = {};

export default Field;
