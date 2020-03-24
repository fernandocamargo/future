import { arrayOf, shape, string } from 'prop-types';
import React, { useCallback } from 'react';

import Experience from './experience';

const Read = ({ profile: { experiences = [] } }) => {
  const renderExperience = useCallback(
    experience => <Experience key={experience.id} {...experience} />,
    []
  );

  return (
    <div>
      <h1>My CV / Experience</h1>
      {!!experiences.length && experiences.map(renderExperience)}
    </div>
  );
};

Read.propTypes = {
  profile: shape({
    experiences: arrayOf(
      shape({
        id: string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

Read.defaultProps = {};

export default Read;
