import { func } from 'prop-types';
import React from 'react';

import useFAQ from './hooks';
import withStyle from './style';

const FAQ = ({ useStyle }) => {
  const { valid, status } = useFAQ();
  const style = useStyle();

  return (
    <div {...style}>
      <h1>FAQ</h1>
      {!!valid && <pre>{JSON.stringify(valid.faq, null, 2)}</pre>}
      <h2>Status: {status}</h2>
    </div>
  );
};

FAQ.propTypes = {
  useStyle: func.isRequired,
};

FAQ.defaultProps = {};

export default withStyle(FAQ);
