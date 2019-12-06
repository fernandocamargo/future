import { arrayOf } from 'prop-types';

import { item } from '..';

export default function() {
  return arrayOf(item).apply(this, arguments);
}
