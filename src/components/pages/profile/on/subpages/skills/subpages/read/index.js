import { arrayOf, shape, string } from 'prop-types';
import React, { useCallback } from 'react';

import Skill from './skill';

const Read = ({ profile: { skills = [] } }) => {
  const renderSkill = useCallback(
    skill => (
      <li key={skill.id}>
        <Skill {...skill} />
      </li>
    ),
    []
  );

  return (
    <div>
      <h1>My CV / Skills</h1>
      {!!skills.length && (
        <dl>
          <dt>All skills</dt>
          <dd>
            <ul>{skills.map(renderSkill)}</ul>
          </dd>
        </dl>
      )}
    </div>
  );
};

Read.propTypes = {
  profile: shape({
    skills: arrayOf(
      shape({
        skill: shape({
          name: string.isRequired,
        }).isRequired,
        id: string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

Read.defaultProps = {};

export default Read;
