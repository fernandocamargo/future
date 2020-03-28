import { shape, string } from 'prop-types';
import React from 'react';

const Education = ({
  school: { name, logo },
  degree,
  startDate,
  endDate,
  description,
}) => (
  <article>
    <h2>{degree}</h2>
    <figure>
      <img src={logo} alt={name} title={name} />
      <figcaption>{name}</figcaption>
    </figure>
    <dl>
      <dt>School</dt>
      <dd>{name}</dd>
    </dl>
    <dl>
      <dt>Period</dt>
      <dd>
        {startDate} - {endDate}
      </dd>
    </dl>
    <dl>
      <dt>Description</dt>
      <dd>{description}</dd>
    </dl>
  </article>
);

Education.propTypes = {
  school: shape({
    name: string.isRequired,
  }).isRequired,
  degree: string.isRequired,
  startDate: string.isRequired,
  endDate: string,
  description: string.isRequired,
};

Education.defaultProps = {
  endDate: null,
};

export default Education;
