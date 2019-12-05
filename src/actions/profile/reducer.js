import update from 'immutability-helper';

import { FETCH, FETCH_SUCCEED, FETCH_FAIL } from './constants';

export const initialState = { loading: false, details: {}, error: null };

export default (state = initialState, { type, details, error }) => {
  switch (type) {
    case FETCH:
      return update(state, {
        loading: { $set: true },
        details: { $set: {} },
        error: { $set: null },
      });
    case FETCH_SUCCEED:
      return update(state, {
        loading: { $set: false },
        details: { $set: details },
      });
    case FETCH_FAIL:
      return update(state, {
        loading: { $set: false },
        error: { $set: error },
      });
    default:
      return state;
  }
};
