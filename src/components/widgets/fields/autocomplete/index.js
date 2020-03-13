import { any, func, oneOfType } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Autocomplete = ({ useStyle, value }) => {
  const style = useStyle();

  return <pre {...style}>{JSON.stringify(value, null, 2)}</pre>;
};

Autocomplete.propTypes = {
  useStyle: func.isRequired,
  value: oneOfType([any]),
};

Autocomplete.defaultProps = {
  value: null,
};

export default withStyle(Autocomplete);
