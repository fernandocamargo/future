import { shape, string } from 'prop-types';
import React, { Suspense as OnDemand, useMemo } from 'react';
import { Switch as Routes } from 'react-router-dom';

import { useRoutes } from 'hooks';
import { Restricted } from 'components/routes';
import { Loader } from 'components/widgets';

import { Read, Write } from './subpages';

const Skills = ({ profile }) => {
  const routes = useRoutes();
  const props = useMemo(() => ({ profile }), [profile]);

  return (
    <OnDemand fallback={<Loader />}>
      <Routes>
        <Restricted
          path={`${routes.skills}/${routes.edit}`}
          component={Write}
          props={props}
          exact
        />
        <Restricted path="*" component={Read} props={props} />
      </Routes>
    </OnDemand>
  );
};

Skills.propTypes = {
  profile: shape({
    firstName: string.isRequired,
    bio: string.isRequired,
  }).isRequired,
};

Skills.defaultProps = {};

export default Skills;
