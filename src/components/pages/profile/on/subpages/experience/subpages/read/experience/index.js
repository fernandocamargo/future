import { shape, string } from 'prop-types';
import React from 'react';

const Experience = ({
  company: { name: company },
  jobTitle,
  startDate,
  endDate,
  description,
}) => (
  <article>
    <h2>{jobTitle}</h2>
    <dl>
      <dt>Company</dt>
      <dd>{company}</dd>
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

Experience.propTypes = {
  company: shape({
    name: string.isRequired,
  }).isRequired,
  jobTitle: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  description: string.isRequired,
};

Experience.defaultProps = {};

export default Experience;
