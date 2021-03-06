import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Language = ({ useStyle, ...props }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

Language.propTypes = {
  useStyle: func.isRequired,
};

Language.defaultProps = {};

export default withStyle(Language);
