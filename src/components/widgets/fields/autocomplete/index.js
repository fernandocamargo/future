import { any, func, node, oneOfType } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Autocomplete = ({ useStyle, label, value }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <h1>{label}</h1>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

Autocomplete.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
  value: oneOfType([any]),
};

Autocomplete.defaultProps = {
  value: null,
};

export default withStyle(Autocomplete);
