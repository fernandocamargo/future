import { func } from 'prop-types';
import React, { Suspense as OnDemand, useMemo } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Restricted } from 'components/routes';
import { Loader } from 'components/widgets';

import { AboutMe, Education, Experience, Skills } from './subpages';
import Menu from './menu';
import withStyle from './style';

const Profile = ({ useStyle, profile }) => {
  const { education, experience, skills } = useRoutes();
  const props = useMemo(() => ({ profile }), [profile]);
  const style = useStyle();

  return (
    <section {...style}>
      <Menu />
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Restricted
            path={education}
            component={Education}
            props={props}
            exact
          />
          <Restricted
            path={experience}
            component={Experience}
            props={props}
            exact
          />
          <Restricted path={skills} component={Skills} props={props} exact />
          <Restricted path="*" component={AboutMe} props={props} />
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
