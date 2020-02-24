import castArray from 'lodash/castArray';
import isFunction from 'lodash/isFunction';
import { assign } from 'xstate';

export const apply = actions =>
  castArray(actions).map(action =>
    isFunction(action) ? action : assign(action)
  );

export const setError = assign({ error: (_, { data: error }) => error });
