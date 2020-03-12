import {
  bool,
  func,
  instanceOf,
  node,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React, { useCallback } from 'react';
import { useId } from '@reach/auto-id';
import { Radio } from '@material-ui/core';

import withStyle from './style';

const Option = ({
  onChange: change,
  fieldRef: inputRef,
  useStyle,
  name,
  label,
  value,
  checked,
}) => {
  const id = useId(name);
  const onChange = useCallback(() => change(value), [change, value]);
  const style = useStyle();

  return (
    <div {...style}>
      <Radio
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        inputRef={inputRef}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Option.propTypes = {
  useStyle: func.isRequired,
  name: string.isRequired,
  label: node.isRequired,
  value: string.isRequired,
  checked: bool,
  onChange: func.isRequired,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })]),
};

Option.defaultProps = {
  checked: false,
  fieldRef: null,
};

export default withStyle(Option);
