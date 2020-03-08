import { setDataMessage } from '..';

export default response =>
  Promise.reject(
    response.response
      ? response
      : setDataMessage({ message: 'network.not-connected', response })
  );
