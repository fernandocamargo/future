import isEqual from 'lodash/isEqual';
import isNull from 'lodash/isNull';

const isDescendant = child => ({
  of: parent => {
    if (isEqual(child, parent)) {
      return true;
    }

    var node = child.parentNode;

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
