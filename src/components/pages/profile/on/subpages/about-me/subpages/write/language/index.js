import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Language = ({ useStyle }) => {
  const style = useStyle();

  return (
    <div {...style}>
      <p>Language</p>
    </div>
  );
};

Language.propTypes = {
  useStyle: func.isRequired,
};

Language.defaultProps = {};

export default withStyle(Language);
