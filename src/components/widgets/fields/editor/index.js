import { func } from 'prop-types';
import React, { useCallback } from 'react';

import withStyle from './style';

const Editor = ({ onChange: change, useStyle, value }) => {
  const onChange = useCallback(({ target: { value: next } }) => change(next), [
    change,
  ]);
  const style = useStyle();

  return (
    <div {...style}>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};

Editor.propTypes = {
  useStyle: func.isRequired,
};

Editor.defaultProps = {};

export default withStyle(Editor);
