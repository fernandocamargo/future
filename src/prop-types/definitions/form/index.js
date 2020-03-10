import { arrayOf, elementType, node, shape } from 'prop-types';

export const components = shape({
  Form: elementType.isRequired,
  Fieldset: elementType.isRequired,
  Submit: elementType.isRequired,
  Loader: elementType.isRequired,
}).isRequired;

export const elements = shape({
  fields: shape({ ordered: arrayOf(node.isRequired).isRequired }).isRequired,
}).isRequired;
