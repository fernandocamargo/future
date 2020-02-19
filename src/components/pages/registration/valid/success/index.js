import { func } from 'prop-types';
import React, { useMemo } from 'react';

import { Link } from 'components/widgets';

import withStyle from './style';

const fromNow = () => ({
  in: format => 10,
});

const Countdown = ({ from }) => {
  return from;
};

const Success = ({ useStyle, redirect, when }) => {
  const style = useStyle();
  const countdown = useMemo(() => fromNow(redirect.when).in('seconds'), [
    redirect,
  ]);

  return (
    <article {...style}>
      <h2>All done.</h2>
      <p>Your account has been successfully created.</p>
      <p>
        <span>We're redirecting you to the </span>
        <Link to={redirect.to}>login page</Link>
        <span> in </span>
        <Countdown from={countdown} />
        <span>second(s).</span>
      </p>
    </article>
  );
};

Success.propTypes = {
  useStyle: func.isRequired,
  redirect: func.isRequired,
};

Success.defaultProps = {};

export default withStyle(Success);
