import isEqual from 'lodash/isEqual';
import {
  any,
  arrayOf,
  func,
  instanceOf,
  oneOfType,
  node,
  shape,
  string,
} from 'prop-types';
import React, { useCallback } from 'react';
import { FormControl, FormHelperText, FormLabel } from '@material-ui/core';

import Option from './option';
import withStyle from './style';

const Radio = ({
  useStyle,
  label,
  options,
  value,
  onChange,
  error,
  fieldRef,
}) => {
  const renderOption = useCallback(
    (option, index) => {
      const checked = isEqual(option.value, value);
      const extra = { ...(checked && { fieldRef }) };

      return (
        <Option
          {...option}
          key={index}
          checked={checked}
          onChange={onChange}
          {...extra}
        />
      );
    },
    [value, onChange, fieldRef]
  );
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl error={!!error}>
        <FormLabel>{label}</FormLabel>
        {options.map(renderOption)}
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Radio.propTypes = {
  useStyle: func.isRequired,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
  name: string.isRequired,
  label: node.isRequired,
  options: arrayOf(
    shape({
      label: node.isRequired,
      value: any.isRequired,
    }).isRequired
  ),
  value: string,
  onChange: func.isRequired,
  error: node,
};

Radio.defaultProps = {
  options: [],
  value: '',
  error: null,
};

export default withStyle(Radio);
