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
import { FormLabel } from '@material-ui/core';

import Option from './option';
import withStyle from './style';

const Radio = ({ useStyle, label, options, value, onChange, fieldRef }) => {
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
      <FormLabel>{label}</FormLabel>
      {options.map(renderOption)}
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
};

Radio.defaultProps = {
  options: [],
  value: '',
};

export default withStyle(Radio);
