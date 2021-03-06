import {
  bool,
  func,
  instanceOf,
  node,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

import { focus } from 'helpers/dom';
import { reverse } from 'helpers/boolean';

import { measure } from './helpers';
import Toggler from './toggler';
import withStyle from './style';

const Password = ({
  onChange: change,
  fieldRef: inputRef,
  useStyle,
  name,
  label,
  value,
  disabled,
  error,
}) => {
  const [visible, setVisible] = useState(false);
  const type = useMemo(() => (visible ? 'text' : 'password'), [visible]);
  const toggle = useCallback(() => {
    setVisible(reverse);
    focus(inputRef.current);
  }, [inputRef]);
  const labelWidth = useMemo(() => measure(label), [label]);
  const onChange = useCallback(({ target: { value: next } }) => change(next), [
    change,
  ]);
  const style = useStyle();

  return (
    <div {...style}>
      <FormControl variant="outlined" error={!!error}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          error={!!error}
          labelWidth={labelWidth}
          endAdornment={<Toggler visible={visible} onClick={toggle} />}
          inputRef={inputRef}
          disabled={disabled}
        />
        {!!error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

Password.propTypes = {
  useStyle: func.isRequired,
  name: string.isRequired,
  label: node.isRequired,
  value: oneOfType([string, number]),
  onChange: func.isRequired,
  error: node,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
  disabled: bool,
};

Password.defaultProps = {
  value: '',
  error: null,
  disabled: false,
};

export default withStyle(Password);
