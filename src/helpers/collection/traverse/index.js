import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import update from 'immutability-helper';

const traverse = (object, path = []) => ({
  map: transform =>
    Object.entries(object).reduce((stack, [key, current]) => {
      const deep = isPlainObject(current) || isArray(current);
      const location = path.concat(key);
      const next = deep
        ? traverse(current, location).map(transform)
        : transform(current, location);

      return update(stack, { [key]: { $set: next } });
    }, object.constructor()),
});

export default traverse;
