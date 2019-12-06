import { func, node, oneOfType, shape, string } from 'prop-types';

import { items } from '..';

export default function() {
  return shape({
    id: string.isRequired,
    label: node.isRequired,
    url: oneOfType([string.isRequired, func.isRequired]).isRequired,
    items,
  }).apply(this, arguments);
}
