import { isProduction } from 'helpers/environment';

export const getURL = () => {
  switch (true) {
    case isProduction():
      return 'https://api.expertlead.io/';
    default:
      return 'https://api-staging.expertlead.io/';
  }
};
