import property from 'lodash/property';

export const getLocationOptionKeywords = property('name');

export const getLocationOptionLabel = ({
  country: { name: country },
  accent,
}) => `${accent}, ${country}`;
