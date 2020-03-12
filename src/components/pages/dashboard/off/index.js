import React from 'react';

const Off = props => (
  <div>
    <h1>Off</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

Off.propTypes = {};

Off.defaultProps = {};

export default Off;
