import { isProduction } from 'helpers/environment';
import { setDataMessage } from 'helpers/response';

export const fail = response =>
  Promise.reject(
    response.response
      ? response
      : setDataMessage({ message: 'network.not-connected', response })
  );

export const getURL = () => {
  switch (true) {
    case isProduction():
      return 'https://api.expertlead.io/';
    default:
      return 'https://api-staging.expertlead.io/';
  }
};
