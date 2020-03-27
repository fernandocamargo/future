import { arrayOf, shape, string } from 'prop-types';
import React, { useCallback } from 'react';

import Education from './education';

const Read = ({ profile: { educations = [] } }) => {
  const renderEducation = useCallback(
    education => <Education key={education.id} {...education} />,
    []
  );

  return (
    <div>
      <h1>My CV / Education</h1>
      {!!educations.length && educations.map(renderEducation)}
    </div>
  );
};

Read.propTypes = {
  profile: shape({
    educations: arrayOf(
      shape({
        id: string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

Read.defaultProps = {};

export default Read;
