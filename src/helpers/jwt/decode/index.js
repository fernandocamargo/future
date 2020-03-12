import { HYPHENS, UNDERSCORES } from './constants';
import { decode } from './helpers';

export default token => {
  const [, base64URL] = token.split('.');
  const base64 = base64URL.replace(HYPHENS, '+').replace(UNDERSCORES, '/');
  const URI = atob(base64)
    .split('')
    .map(decode)
    .join('');
  const json = decodeURIComponent(URI);

  return JSON.parse(json);
};
