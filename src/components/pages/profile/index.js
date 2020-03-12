import { func } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Restricted } from 'components/routes';
import { Loader } from 'components/widgets';

import { AboutMe, Education, Experience, Skills } from './subpages';
import Menu from './menu';
import withStyle from './style';

const Profile = ({ useStyle }) => {
  const { education, experience, skills } = useRoutes();
  const style = useStyle();

  return (
    <section {...style}>
      <Menu />
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Restricted path={education} component={Education} exact />
          <Restricted path={experience} component={Experience} exact />
          <Restricted path={skills} component={Skills} exact />
          <Restricted path="*" component={AboutMe} />
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
