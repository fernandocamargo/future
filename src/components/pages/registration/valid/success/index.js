import moment from 'moment';
import { func, instanceOf, shape } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Countdown, Link } from 'components/widgets';

import { useSuccess } from './hooks';
import messages from './messages';

const Success = ({ redirect: { to, ...redirect } }) => {
  const { countdown } = useSuccess({ redirect });
  const { title } = useI18n(messages);

  return (
    <article>
      <h1>{title}</h1>
      <p>
        <span>We're redirecting you to the </span>
        <Link to={to}>login page</Link>
        <span> in </span>
        {countdown && <Countdown {...countdown} />}
        <span> second(s).</span>
      </p>
    </article>
  );
};

Success.propTypes = {
  redirect: shape({
    when: instanceOf(moment).isRequired,
    to: func.isRequired,
  }).isRequired,
};

Success.defaultProps = {};

export default Success;
