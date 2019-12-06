import { arrayOf, func, node, oneOfType, shape, string } from 'prop-types';

function lazy(propType) {
  return function() {
    return propType.apply(this, arguments);
  };
}

/*
export const item = lazy(function() {
  return shape({
    id: string.isRequired,
    label: node.isRequired,
    url: oneOfType([string.isRequired, func.isRequired]).isRequired,
    hue: string.isRequired,
    children: items,
  }).isRequired;
});

export const items = arrayOf(item);
*/

export const items = arrayOf(shape({}));
