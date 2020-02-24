import moment from 'moment';
import { func, instanceOf, shape } from 'prop-types';
import React from 'react';

import { useI18n } from 'hooks';
import { Countdown } from 'components/widgets';

import { useSuccess } from './hooks';
import Link from './link';
import messages from './messages';

const Success = ({ redirect: { to, ...redirect } }) => {
  const { countdown } = useSuccess({ redirect });
  const { title, description } = useI18n(messages, {
    link: <Link to={to} />,
    countdown: countdown && <Countdown {...countdown} />,
  });

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
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
