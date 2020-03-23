import React from 'react';

import { Loader } from 'components/widgets';

import { useAboutMe } from './hooks';
import On from './on';
import Off from './off';

const AboutMe = () => {
  const { on, off } = useAboutMe();

  switch (true) {
    case !!on:
      return <On {...on} />;
    case !!off:
      return <Off {...off} />;
    default:
      return <Loader />;
  }
};

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
