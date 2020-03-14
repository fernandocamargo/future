import { any, func, node, oneOfType } from 'prop-types';
import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import { Autocomplete as Container } from '@material-ui/lab';

import { useI18n } from 'hooks';

import useAutocomplete from './hooks';
import Input from './input';
import messages from './messages';
import withStyle from './style';

const Autocomplete = ({ useStyle, error, ...props }) => {
  const autocomplete = useAutocomplete({ render: Input, error, ...props });
  const { 'no-options': noOptions, loading } = useI18n(messages);
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <Container
          loadingText={loading}
          noOptionsText={noOptions}
          {...autocomplete}
        />
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
