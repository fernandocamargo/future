import { func, node, oneOfType, shape, string } from 'prop-types';

import { items } from '..';

export const item = {
  id: string.isRequired,
  label: node.isRequired,
  url: oneOfType([string.isRequired, func.isRequired]).isRequired,
};

export default function() {
  return shape({ ...item, items }).apply(this, arguments);
}
