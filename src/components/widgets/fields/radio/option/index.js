import { func, instanceOf, node, oneOfType, shape, string } from 'prop-types';
import React, { useMemo } from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';

import withStyle from './style';

const Option = ({ fieldRef: inputRef, useStyle, label, value }) => {
  const control = useMemo(() => <Radio inputRef={inputRef} />, [inputRef]);
  const style = useStyle();

  return (
    <FormControlLabel
      value={value}
      control={control}
      label={label}
      {...style}
    />
  );
};

Option.propTypes = {
  useStyle: func.isRequired,
  fieldRef: oneOfType([func, shape({ current: instanceOf(Element) })])
    .isRequired,
  label: node.isRequired,
  value: string.isRequired,
};

Option.defaultProps = {};

export default withStyle(Option);
