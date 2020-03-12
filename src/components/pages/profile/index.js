import { func } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Public } from 'components/routes';
import { Loader } from 'components/widgets';

import { AboutMe, Education, Experience, Skills } from './subpages';
import withStyle from './style';

const Profile = ({ useStyle }) => {
  const { education, experience, skills } = useRoutes();
  const style = useStyle();

  return (
    <section {...style}>
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Public path={education} component={Education} exact />
          <Public path={experience} component={Experience} exact />
          <Public path={skills} component={Skills} exact />
          <Public path="*" component={AboutMe} />
        </Routes>
      </OnDemand>
    </section>
  );
};

Profile.propTypes = {
  useStyle: func.isRequired,
};

Profile.defaultProps = {};

export default withStyle(Profile);
