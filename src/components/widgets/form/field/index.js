import React from 'react';

import withStyle from './style';

const Field = ({ field: Field, settings, ...props }) => (
  <Field {...settings} {...props} />
);

Field.propTypes = {};

Field.defaultProps = {};

export default withStyle(Field);
