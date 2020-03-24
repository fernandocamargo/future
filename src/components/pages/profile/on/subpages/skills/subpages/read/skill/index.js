import { shape, string } from 'prop-types';
import React from 'react';

const Skill = ({ skill: { name } }) => <span>{name}</span>;

Skill.propTypes = {
  skill: shape({
    name: string.isRequired,
  }).isRequired,
};

Skill.defaultProps = {};

export default Skill;
