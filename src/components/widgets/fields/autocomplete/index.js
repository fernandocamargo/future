import { any, func, node, oneOfType } from 'prop-types';
import React from 'react';
import { Autocomplete as Container } from '@material-ui/lab';

import useAutocomplete from './hooks';
import Input from './input';
import withStyle from './style';

const Autocomplete = ({ useStyle, ...props }) => {
  const autocomplete = useAutocomplete({ render: Input, ...props });
  const style = useStyle();

  return (
    <div {...style}>
      <Container {...autocomplete} />
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
