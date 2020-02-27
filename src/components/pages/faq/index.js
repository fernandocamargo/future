import { func } from 'prop-types';
import React from 'react';

import useFAQ from './hooks';
import withStyle from './style';

const FAQ = ({ useStyle }) => {
  const { valid } = useFAQ();
  const style = useStyle();

  return (
    <div {...style}>
      <h1>FAQ</h1>
      <pre>{JSON.stringify(valid, null, 2)}</pre>
    </div>
  );
};

FAQ.propTypes = {
  useStyle: func.isRequired,
};

FAQ.defaultProps = {};

export default withStyle(FAQ);
