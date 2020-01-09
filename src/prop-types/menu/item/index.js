import { func, node, oneOf, oneOfType, shape, string } from 'prop-types';

import { items } from '..';

export const item = {
  id: string.isRequired,
  children: node.isRequired,
  url: oneOfType([string, func]),
  target: oneOf(['_blank']),
};

export default function() {
  return shape({ ...item, items }).apply(this, arguments);
}
