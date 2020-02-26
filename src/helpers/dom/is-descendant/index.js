import isEqual from 'lodash/isEqual';
import isNull from 'lodash/isNull';

const isDescendant = child => ({
  of: parent => {
    let { parentNode: node } = child;

    if (isEqual(child, parent)) {
      return true;
    }

    while (!isNull(node)) {
      if (isEqual(node, parent)) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  },
});

export default isDescendant;
