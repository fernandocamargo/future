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
import React, { useCallback, useMemo } from 'react';
import { FormLabel, RadioGroup } from '@material-ui/core';

import Option from './option';
import withStyle from './style';

const Radio = ({
  useStyle,
  fieldRef,
  name,
  label,
  options,
  value,
  onChange,
}) => {
  const renderOption = useCallback(
    option => <Option key={option.value} {...option} fieldRef={fieldRef} />,
    [fieldRef]
  );
  const id = useMemo(() => JSON.stringify({ name, value }), [name, value]);
  const style = useStyle();

  return (
    <div {...style}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={id}
        value={value}
        onChange={something => console.log({ something, onChange })}
      >
        {options.map(renderOption)}
      </RadioGroup>
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
