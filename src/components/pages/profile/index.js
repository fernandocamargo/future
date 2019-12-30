import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

const Profile = () => {
  const { title } = useI18n(messages);

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
