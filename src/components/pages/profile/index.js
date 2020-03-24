import React from 'react';

import { Loader } from 'components/widgets';

import { useProfile } from './hooks';
import On from './on';
import Off from './off';

const Profile = () => {
  const { on, off } = useProfile();

  switch (true) {
    case !!on:
      return <On {...on} />;
    case !!off:
      return <Off {...off} />;
    default:
      return <Loader />;
  }
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
