import isString from 'lodash/isString';
import update from 'immutability-helper';

const traverse = (object, path = []) => ({
  map: transform =>
    Object.entries(object).reduce((stack, [key, current]) => {
      const deep =
        !!current && !!Object.keys(current).length && !isString(current);
      const location = path.concat(key);
      const next = deep
        ? traverse(current, location).map(transform)
        : transform(current, location);

      return update(stack, { [key]: { $set: next } });
    }, object.constructor()),
});

export default traverse;
