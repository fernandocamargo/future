import { arrayOf, shape, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import Language from './language';
import Location from './location';

const Read = ({
  profile: {
    spokenLanguages: languages = [],
    location: mainLocation,
    bio,
    firstName,
    headline,
    lastName,
  },
}) => {
  const locations = useMemo(() => (mainLocation ? [mainLocation] : []), [
    mainLocation,
  ]);
  const renderLocation = useCallback(
    location => (
      <li key={location.id}>
        <Location {...location} />
      </li>
    ),
    []
  );
  const renderLanguage = useCallback(
    language => (
      <li key={language.id}>
        <Language {...language} />
      </li>
    ),
    []
  );

  return (
    <div>
      <h1>My CV / About me</h1>
      {!!firstName && (
        <dl>
          <dt>Name</dt>
          <dd>
            {firstName} {lastName}
          </dd>
        </dl>
      )}
      {!!headline && (
        <dl>
          <dt>Headline</dt>
          <dd>{headline}</dd>
        </dl>
      )}
      {!!locations.length && (
        <dl>
          <dt>Locations</dt>
          <dd>
            <ul>{locations.map(renderLocation)}</ul>
          </dd>
        </dl>
      )}
      {!!languages.length && (
        <dl>
          <dt>Languages</dt>
          <dd>
            <ul>{languages.map(renderLanguage)}</ul>
          </dd>
        </dl>
      )}
      {!!bio && (
        <dl>
          <dt>Biography</dt>
          <dd>{bio}</dd>
        </dl>
      )}
    </div>
  );
};

Read.propTypes = {
  profile: shape({
    bio: string.isRequired,
    firstName: string.isRequired,
    headline: string.isRequired,
    lastName: string.isRequired,
    location: shape({
      country: shape({
        name: string.isRequired,
      }).isRequired,
      id: string.isRequired,
      accent: string.isRequired,
    }),
    spokenLanguages: arrayOf(
      shape({
        language: shape({
          name: string.isRequired,
        }).isRequired,
        id: string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

Read.defaultProps = {};

export default Read;
