import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const Home = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
