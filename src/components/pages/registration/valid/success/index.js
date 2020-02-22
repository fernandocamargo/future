import { func, number, shape } from 'prop-types';
import React, { useMemo } from 'react';

import { Link } from 'components/widgets';

const fromNow = () => ({
  in: format => 10,
});

const Countdown = ({ from }) => {
  return from;
};

const Success = ({ redirect: { when, to } }) => {
  const countdown = useMemo(() => fromNow(when).in('seconds'), [when]);

  return (
    <article>
      <h2>All done.</h2>
      <p>Your account has been successfully created.</p>
      <p>
        <span>We're redirecting you to the </span>
        <Link to={to}>login page</Link>
        <span> in </span>
        <Countdown from={countdown} />
        <span>second(s).</span>
      </p>
    </article>
  );
};

Success.propTypes = {
  redirect: shape({
    when: number.isRequired,
    to: func.isRequired,
  }).isRequired,
};

Success.defaultProps = {};

export default Success;
