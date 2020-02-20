import { func } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Login = ({ useStyle, ...props }) => {
  const style = useStyle();

  console.log(props);

  return (
    <section {...style}>
      <h1>Login</h1>
    </section>
  );
};

Login.propTypes = {
  useStyle: func.isRequired,
};

Login.defaultProps = {};

export default withStyle(Login);
