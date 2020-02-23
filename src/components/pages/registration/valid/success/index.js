import { func, number, shape } from 'prop-types';
import React, { useMemo } from 'react';

import { useI18n } from 'hooks';
import { Link } from 'components/widgets';

import Menu from '../../menu';
import messages from './messages';

const fromNow = () => ({
  in: format => 10,
});

const Countdown = ({ from }) => {
  return from;
};

const Success = ({ redirect: { when, to }, profile }) => {
  const countdown = useMemo(() => fromNow(when).in('seconds'), [when]);
  const { title } = useI18n(messages);

  return (
    <article>
      <h2>{title}</h2>
      <p>
        <span>We're redirecting you to the </span>
        <Link to={to}>login page</Link>
        <span> in </span>
        <Countdown from={countdown} />
        <span>second(s).</span>
      </p>
      <Menu profile={profile} />
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
