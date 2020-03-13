import { any, func, node, oneOfType } from 'prop-types';
import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import { Autocomplete as Container } from '@material-ui/lab';

import useAutocomplete from './hooks';
import Input from './input';
import withStyle from './style';

const Autocomplete = ({ useStyle, error, ...props }) => {
  const autocomplete = useAutocomplete({ render: Input, ...props });
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <Container {...autocomplete} />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Autocomplete.propTypes = {
  useStyle: func.isRequired,
  label: node.isRequired,
  value: oneOfType([any]),
  error: node,
};

Autocomplete.defaultProps = {
  value: null,
  error: null,
};

export default withStyle(Autocomplete);
