import { isProduction, isStaging } from 'helpers/environment';

export const getURL = () => {
  switch (true) {
    case isProduction():
      return 'https://api.expertlead.io/';
    case isStaging():
      return 'https://api-staging.expertlead.io/';
    default:
      return 'https://api-staging.expertlead.io/';
  }
};
