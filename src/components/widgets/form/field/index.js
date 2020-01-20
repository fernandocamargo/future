import { elementType, func, object } from 'prop-types';
import { createElement } from 'react';

import withStyle from './style';

const Field = ({ useStyle, field, settings, ...props }) => {
  const style = useStyle();

  return createElement(field, { ...settings, ...props, ...style });
};

Field.propTypes = {
  useStyle: func.isRequired,
  field: elementType.isRequired,
  settings: object,
};

Field.defaultProps = {
  settings: {},
};

export default withStyle(Field);
