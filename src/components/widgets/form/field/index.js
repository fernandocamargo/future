import { elementType, object } from 'prop-types';
import { createElement } from 'react';

import withStyle from './style';

const Field = ({ field, settings, ...props }) =>
  createElement(field, { ...settings, ...props });

Field.propTypes = {
  field: elementType.isRequired,
  settings: object,
};

Field.defaultProps = {
  settings: {},
};

export default withStyle(Field);
